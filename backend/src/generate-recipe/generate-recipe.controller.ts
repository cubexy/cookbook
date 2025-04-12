import { Body, Controller, Post, Res } from "@nestjs/common";
import { GenerateRecipeService } from "./generate-recipe.service";
import { Output, pipeDataStreamToResponse, streamText } from "ai";
import { Response } from "express";
import { azure } from "@ai-sdk/azure";
import { createRecipeSchema } from "src/recipes/schemas/create-recipe.schema";
import { GenerateRecipeDto } from "./dto/generate-recipe.dto";

@Controller("generate-recipe")
export class GenerateRecipeController {
  constructor(private readonly generateRecipeService: GenerateRecipeService) {}

  @Post()
  async generateRecipe(
    @Body() generateRecipeDto: GenerateRecipeDto,
    @Res() res: Response
  ) {
    pipeDataStreamToResponse(res, {
      execute: async (dataStreamWriter) => {
        dataStreamWriter.writeData("Generating recipe...");

        const result = streamText({
          model: azure("gpt-4o-mini"),
          system:
            "Du bist ein Rezeptgenerator. Erstelle ein Rezept mit detaillierten Anweisungen.",
          prompt: generateRecipeDto.prompt,
          experimental_output: Output.object({
            schema: createRecipeSchema
          })
        });

        result.mergeIntoDataStream(dataStreamWriter);
      },
      onError: (error) => {
        return error instanceof Error ? error.message : String(error);
      }
    });
  }
}

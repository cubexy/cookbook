import { Controller, Post, Res } from "@nestjs/common";
import { GenerateRecipeService } from "./generate-recipe.service";
import { Output, pipeDataStreamToResponse, streamText } from "ai";
import { Response } from "express";
import { openai } from "@ai-sdk/openai";
import { createRecipeSchema } from "src/recipes/schemas/create-recipe.schema";

@Controller("generate-recipe")
export class GenerateRecipeController {
  constructor(private readonly generateRecipeService: GenerateRecipeService) {}

  @Post()
  async generateRecipe(@Res() res: Response) {
    pipeDataStreamToResponse(res, {
      execute: async (dataStreamWriter) => {
        dataStreamWriter.writeData("Generating recipe...");

        const result = streamText({
          model: openai("gpt-4o"),
          system:
            "Du bist ein Rezeptgenerator. Erstelle ein Rezept mit detaillierten Anweisungen.",
          prompt: "Generiere mir ein Rezept für Spaghetti Bolognese.",
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

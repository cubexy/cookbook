import { Body, Controller, Post, Res } from "@nestjs/common";
import { GenerateRecipeService } from "./generate-recipe.service";
import { pipeDataStreamToResponse } from "ai";
import { Response } from "express";
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
        await this.generateRecipeService.generateRecipe(
          generateRecipeDto.prompt,
          dataStreamWriter
        );
      },
      onError: (error) => {
        return error instanceof Error ? error.message : String(error);
      }
    });
  }
}

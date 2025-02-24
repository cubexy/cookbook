import { Controller, Post, Res } from "@nestjs/common";
import { GenerateRecipeService } from "./generate-recipe.service";
import { pipeDataStreamToResponse, streamText } from "ai";
import { Response } from "express";
import { openai } from "@ai-sdk/openai";

@Controller("generate-recipe")
export class GenerateRecipeController {
  constructor(private readonly generateRecipeService: GenerateRecipeService) {}

  @Post()
  async streamData(@Res() res: Response) {
    pipeDataStreamToResponse(res, {
      execute: async (dataStreamWriter) => {
        dataStreamWriter.writeData("initialized call");

        const result = streamText({
          model: openai("gpt-4o"),
          prompt: "Invent a new holiday and describe its traditions."
        });

        result.mergeIntoDataStream(dataStreamWriter);
      },
      onError: (error) => {
        // Error messages are masked by default for security reasons.
        // If you want to expose the error message to the client, you can do so here:
        return error instanceof Error ? error.message : String(error);
      }
    });
  }
}

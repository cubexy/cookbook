import { Injectable } from "@nestjs/common";
import { DataStreamWriter, Output, streamText } from "ai";
import { azure } from "@ai-sdk/azure";
import { createRecipeSchema } from "src/recipes/schemas/create-recipe.schema";

@Injectable()
export class GenerateRecipeService {
  /**
   * Generates a recipe based on the provided prompt
   * @param prompt The user prompt describing the recipe
   * @param dataStreamWriter The writer to stream the response to
   * @returns A stream of the generated recipe
   */
  async generateRecipe(prompt: string, dataStreamWriter: DataStreamWriter) {
    // Send initial message
    dataStreamWriter.writeData("Generating recipe...");

    // Generate the recipe using AI
    const result = streamText({
      model: azure("gpt-4o-mini"),
      system:
        "Du bist ein Rezeptgenerator. Erstelle ein Rezept mit detaillierten Anweisungen.",
      prompt,
      experimental_output: Output.object({
        schema: createRecipeSchema
      })
    });

    // Merge the result into the data stream
    result.mergeIntoDataStream(dataStreamWriter);

    return result;
  }
}

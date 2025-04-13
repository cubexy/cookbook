import { Injectable } from "@nestjs/common";
import { DataStreamWriter, Output, streamText } from "ai";
import { azure } from "@ai-sdk/azure";
import { createRecipeSchema } from "src/recipes/schemas/create-recipe.schema";

@Injectable()
export class GenerateRecipeService {
  /**
   * Generates a recipe based on the provided prompt.
   * @param prompt user prompt describing the recipe
   * @param dataStreamWriter writer to stream the response to
   * @returns stream of the generated recipe
   */
  async generateRecipe(prompt: string, dataStreamWriter: DataStreamWriter) {
    dataStreamWriter.writeData("Generating recipe...");

    const result = streamText({
      model: azure("gpt-4o-mini"),
      system:
        "Du bist ein Rezeptgenerator. Erstelle ein Rezept mit detaillierten Anweisungen. Verwende dabei keine Markdown-Formatierung.",
      prompt,
      experimental_output: Output.object({
        schema: createRecipeSchema
      })
    });

    result.mergeIntoDataStream(dataStreamWriter);

    return result;
  }
}

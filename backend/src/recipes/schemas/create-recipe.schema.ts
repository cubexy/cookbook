import { z } from "zod";

const ingredientSchema = z.object({
  name: z
    .string()
    .min(1)
    .describe(
      "Name der Zutat in Einzahl, bspw. 'Tomate', 'Zwiebel', 'Knoblauch'."
    ),
  quantity: z.number().positive().describe("Menge der Zutat, bspw. 2, 0.5."),
  unit: z
    .string()
    .min(1)
    .describe("Einheit der Zutat, bspw. 'g', 'ml', 'Stück'.")
});

export const createRecipeSchema = z.object({
  title: z
    .string()
    .min(1)
    .describe("Titel des Rezepts, bspw. 'Spaghetti Bolognese'."),
  durationInMinutes: z
    .number()
    .int()
    .positive()
    .describe("Dauer in Minuten, um das Rezept zuzubereiten."),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"] as const),
  tags: z
    .array(z.string().min(1).max(16))
    .min(1)
    .describe(
      "Tags, die das Rezept beschreiben, bspw: 'Vegetarisch', 'Italienisch', 'Nudeln'."
    ),
  ingredients: z
    .array(ingredientSchema)
    .min(1)
    .describe("Liste der Zutaten, die für das Rezept benötigt werden."),
  steps: z
    .array(z.string().min(1))
    .min(1)
    .describe(
      "Liste der Schritte, die zur Zubereitung des Rezepts erforderlich sind. Es werden keine Nummern erwartet. Die Schritte sollen als ganze Sätze ausgeschrieben werden. Bspw: 'Hacke die Tomaten und gib sie in die Schüssel.'."
    ),
  imageUrl: z
    .string()
    .url()
    .describe(
      "URL zu einem Bild des Rezepts. Es wird empfohlen, ein Bild von der Webseite https://unsplash.com/ zu verwenden."
    ),
  chefTopNote: z
    .string()
    .min(1)
    .optional()
    .describe(
      "Persönliche Notiz des Kochs, um das Rezept zu beschreiben. Die Notiz soll nur generiert werden, wenn es eine persönliche Note gibt. Bspw: 'Spaghetti Bolognese ist ein Klassiker der italienischen Küche. Das Gericht hat Wohlfühlgarantie!'."
    ),
  chefBottomNote: z
    .string()
    .min(1)
    .optional()
    .describe(
      "Tipp des Kochs, um das Rezept zu verfeinern. Die Notiz soll nur generiert werden, wenn es einen persönlichen Tipp gibt. Es kann am Ende des Strings ein Emoji verwendet werden, wenn dieser gut zu dem Text passt. Bspw: 'Besonders gut passt zur Bolognese ein schönes Glas Wein. 🍷'."
    )
});

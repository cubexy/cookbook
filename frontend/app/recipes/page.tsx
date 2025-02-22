import { RecipeOverview } from "@/components/displays/RecipeOverview";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, Heading, Separator, Text, TextField } from "@radix-ui/themes";

export type RecipeListItem = {
  id: number;
  title: string;
  tags: string[];
  image: string;
};

const MOCK_DATA: RecipeListItem[] = [
  {
    id: 1,
    title: "Kartoffelgratin",
    tags: ["Vegetarisch", "Auflauf", "Hauptgericht"],
    image: "/recipe_placeholder.jpg"
  },
  {
    id: 2,
    title: "Wiener Schnitzel",
    tags: ["Fleisch", "Klassiker", "Hauptgericht"],
    image: "/recipe_placeholder.jpg"
  },
  {
    id: 3,
    title: "Apfelstrudel",
    tags: ["Dessert", "Süß", "Österreichisch"],
    image: "/recipe_placeholder.jpg"
  },
  {
    id: 4,
    title: "Linsensuppe",
    tags: ["Suppe", "Vegetarisch", "WintergerichtWintergerichtWintergericht"],
    image: "/recipe_placeholder.jpg"
  },
  {
    id: 5,
    title: "Spätzle",
    tags: ["Beilage", "Schwäbisch", "Vegetarisch"],
    image: "/recipe_placeholder.jpg"
  },
  {
    id: 6,
    title: "Gulasch",
    tags: ["Fleisch", "Eintopf", "Hauptgericht"],
    image: "/recipe_placeholder.jpg"
  }
];

const ListRecipes = () => {
  return (
    <Flex gap="3" direction="column" justify="start" align="start">
      <TextField.Root placeholder="Rezepte durchsuchen..." className="w-full mb-3" size="3">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_DATA.map((recipe) => (
          <RecipeOverview key={recipe.id} item={recipe} />
        ))}
      </div>
    </Flex>
  );
};

export default ListRecipes;

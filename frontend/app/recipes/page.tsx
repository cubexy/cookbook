import { RecipeOverview } from "@/components/displays/RecipeOverview";
import { Flex, Heading, Text } from "@radix-ui/themes";

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
      <Heading size="7">Mein Kochbuch</Heading>
      <div className="flex flex-wrap gap-4 flex-col sm:flex-row lg:max-w-[1024px] md:max-w-[636px]">
        {MOCK_DATA.map((recipe) => (
          <RecipeOverview key={recipe.id} item={recipe} />
        ))}
      </div>
    </Flex>
  );
};

export default ListRecipes;

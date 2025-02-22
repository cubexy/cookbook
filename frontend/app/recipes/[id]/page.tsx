import { RecipeHeading } from "@/components/displays/RecipeHeading";
import { IngredientsList } from "@/components/displays/IngredientsList";
import { PreperationStepsList } from "@/components/displays/PreperationStepsList";
import { ArrowRightIcon, CalendarIcon, HandIcon, InfoCircledIcon, LapTimerIcon } from "@radix-ui/react-icons";
import { Badge, Callout, Flex, Separator, Tooltip } from "@radix-ui/themes";
import Image from "next/image";
import { RecipeChefNote } from "@/components/displays/RecipeChefNote";
import { RecipeTagList } from "@/components/displays/RecipeTagList";

export type Recipe = {
  id: number;
  title: string;
  date: string;
  durationInMinutes: number;
  difficulty: string;
  chefTopNote: string;
  tags: string[];
  ingredients: Array<{
    amount: number;
    unit: string;
    unitPlural: string;
    item: string;
  }>;
  steps: string[];
  image: string;
  chefBottomNote: string;
};

const RECIPE_MOCK_DATA: Recipe = {
  id: 1,
  title: "Spaghetti Bolognese",
  date: "09.02.2025",
  durationInMinutes: 30,
  difficulty: "mittel",
  chefTopNote: "Spaghetti Bolognese ist ein Klassiker der italienischen Küche. Das Gericht hat Wohlfühlgarantie!",
  tags: ["Italienisch", "Pasta", "Fleisch"],
  ingredients: [
    { amount: 1, unit: "Packung", unitPlural: "Packungen", item: "Nudeln" },
    { amount: 1, unit: "Schale", unitPlural: "Schalen", item: "Bolognese" }
  ],
  steps: [
    "Zwiebeln und Knoblauch schälen und fein hacken, damit sie sich später gut mit der Sauce verbinden.",
    "Karotten und Sellerie putzen und in sehr kleine Würfel schneiden, um eine gleichmäßige Konsistenz zu erhalten.",
    "In einer großen Pfanne oder einem Topf etwas Olivenöl erhitzen und die Zwiebeln sowie den Knoblauch darin glasig anschwitzen.",
    "Das Hackfleisch hinzufügen und bei mittlerer bis hoher Hitze gut anbraten, bis es krümelig und leicht gebräunt ist.",
    "Die klein gewürfelten Karotten und den Sellerie dazugeben und einige Minuten mitbraten, um das volle Aroma zu entfalten.",
    "Das Tomatenmark einrühren und kurz anrösten, damit es eine leicht karamellisierte Note entwickelt.",
    "Mit Rotwein ablöschen und einige Minuten einkochen lassen, bis sich der Alkohol verflüchtigt und das Aroma intensiviert wird.",
    "Gehackte Tomaten und etwas Brühe hinzufügen, anschließend mit Salz, Pfeffer und italienischen Kräutern wie Oregano und Thymian würzen.",
    "Die Sauce bei niedriger bis mittlerer Hitze mindestens 30 Minuten köcheln lassen, idealerweise 1-2 Stunden, damit sich die Aromen gut entfalten.",
    "Mit frisch gekochter Pasta servieren und nach Belieben mit geriebenem Parmesan und frischem Basilikum garnieren."
  ],
  image: "/recipe_placeholder.jpg",
  chefBottomNote: "Besonders gut passt zur Bolognese ein schönes Glas Wein. 🍷"
};

const ShowRecipe = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col md:flex-row align-top justify-center w-full gap-5">
      <Flex gap="4" direction="column">
        <div className="w-full md:w-[400px] h-[500px] md:h-[600px] relative">
          <Image
            src={RECIPE_MOCK_DATA.image}
            alt={RECIPE_MOCK_DATA.title}
            fill
            quality={75}
            sizes="(max-width: 600px) 100vw, 400px"
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>
        <Flex gap="2" align="center" dir="row" className="flex-wrap w-full md:w-[400px]">
          <Tooltip content="Hinzugefügt am">
            <Badge color="gray" size="3">
              <CalendarIcon /> {RECIPE_MOCK_DATA.date}
            </Badge>
          </Tooltip>
          <Separator orientation="vertical" />
          <Tooltip content="Dauer der Zubereitung">
            <Badge color="gray" size="3">
              <LapTimerIcon /> {RECIPE_MOCK_DATA.durationInMinutes}min
            </Badge>
          </Tooltip>
          <Separator orientation="vertical" />
          <Tooltip content="Schwierigkeitsgrad">
            <Badge color="gray" size="3">
              <HandIcon /> {RECIPE_MOCK_DATA.difficulty}
            </Badge>
          </Tooltip>
        </Flex>
      </Flex>
      <Separator size="4" className="!block md:!hidden" />
      <Flex direction="column" align="start" className="w-full md:w-[800px] gap-4 md:gap-2">
        <RecipeHeading title={RECIPE_MOCK_DATA.title} />
        <RecipeChefNote chefNote={RECIPE_MOCK_DATA.chefTopNote} />
        <RecipeTagList tags={RECIPE_MOCK_DATA.tags} />
        <IngredientsList ingredients={RECIPE_MOCK_DATA.ingredients} />
        <PreperationStepsList steps={RECIPE_MOCK_DATA.steps} />
        <Callout.Root color="gray" variant="soft" highContrast className="w-full">
          <Tooltip content="Damit machst du das Gericht noch besser!">
            <Callout.Icon>
              <ArrowRightIcon />
            </Callout.Icon>
          </Tooltip>
          <Callout.Text>{RECIPE_MOCK_DATA.chefBottomNote}</Callout.Text>
        </Callout.Root>
      </Flex>
    </div>
  );
};

export default ShowRecipe;

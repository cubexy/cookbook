import { RecipeHeading } from "@/components/displays/RecipeHeading";
import { RecipeTagList } from "@/components/displays/RecipeTagList";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Strong,
  Text
} from "@radix-ui/themes";
import { Title } from "@radix-ui/themes/components/alert-dialog";
import Image from "next/image";

const ListRecipes = () => {
  return (
    <Flex gap="4" direction="column">
      <Heading size="5">Rezepte</Heading>
      <Card size="2" className="w-[400px] h-[500px] shadow-lg">
        <Inset clip="padding-box" side="top" pb="current" className="absolute">
          <div className="max-w-[400px] min-w-[400px] max-h-[500px] min-h-[500px] relative">
            <Image
              src="/recipe_placeholder.jpg"
              alt="Rezeptbild"
              fill
              quality={75}
              className="object-cover"
            />
          </div>
        </Inset>
        <Flex className="absolute pt-[350px]" direction="column" gap="2">
          <Heading size="7" weight="medium">
            Spaghetti Bolognese
          </Heading>
          <RecipeTagList tags={["Nudeln", "Fleisch", "Tomaten"]} size="2" />
        </Flex>
      </Card>
    </Flex>
  );
};

export default ListRecipes;

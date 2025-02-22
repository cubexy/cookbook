import { Recipe } from "@/app/recipes/[id]/page";
import { Card, Flex, Text } from "@radix-ui/themes";

export const RecipeChefNote = ({ chefNote }: { chefNote: Recipe["chefTopNote"] }) => {
  if (!chefNote) return null;
  return (
    <Card className="w-full">
      <Flex gap="0" direction="column">
        <Text size="2" weight="light">
          Anmerkung vom Chefkoch
        </Text>
        <Text size="3">{chefNote}</Text>
      </Flex>
    </Card>
  );
};

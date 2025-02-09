import { Recipe } from "@/app/recipes/[id]/page";
import { Badge, Card, Flex, Heading, Quote, Text } from "@radix-ui/themes";

export const RecipeHeading = ({ title }: { title: Recipe["title"] }) => {
  return (
    <Heading size="7">
      <Quote>{title}</Quote>
    </Heading>
  );
};

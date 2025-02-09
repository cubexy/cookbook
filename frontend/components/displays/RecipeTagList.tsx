import { Recipe } from "@/app/recipes/[id]/page";
import { Badge, Flex } from "@radix-ui/themes";

export const RecipeTagList = ({ tags }: { tags: Recipe["tags"] }) => {
  return (
    <Flex
      gap="2"
      align="center"
      dir="row"
      className="flex-wrap w-full md:w-[400px]"
    >
      {tags.map((tag) => (
        <Badge key={tag} size="3">
          {tag}
        </Badge>
      ))}
    </Flex>
  );
};

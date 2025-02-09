import { Recipe } from "@/app/recipes/[id]/page";
import { Badge, BadgeProps, Flex } from "@radix-ui/themes";

export const RecipeTagList = ({
  tags,
  size
}: {
  tags: Recipe["tags"];
  size?: BadgeProps["size"];
}) => {
  return (
    <Flex
      gap="2"
      align="center"
      dir="row"
      className="flex-wrap w-full md:w-[400px]"
    >
      {tags.map((tag) => (
        <Badge key={tag} size={size ?? "3"}>
          {tag}
        </Badge>
      ))}
    </Flex>
  );
};

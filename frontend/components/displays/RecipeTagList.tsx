import { Recipe } from "@/app/recipes/[id]/page";
import { Badge, BadgeProps, Flex } from "@radix-ui/themes";

export const RecipeTagList = ({
  tags,
  size,
  color,
  variant,
  className
}: {
  tags: Recipe["tags"];
  size?: BadgeProps["size"];
  color?: BadgeProps["color"] | "accent";
  variant?: BadgeProps["variant"];
  className?: string;
}) => {
  return (
    <Flex gap="2" align="center" dir="row" className="flex-wrap w-full">
      {tags.map((tag) => (
        <Badge
          key={tag}
          size={size ?? "3"}
          /* @ts-ignore */
          color={color}
          variant={variant}
          className={className}
        >
          {tag}
        </Badge>
      ))}
    </Flex>
  );
};

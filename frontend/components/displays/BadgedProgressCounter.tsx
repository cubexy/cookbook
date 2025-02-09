import { Flex, Progress, Badge, BadgeProps } from "@radix-ui/themes";

export const BadgedProgressCounter = ({
  value,
  max,
  text,
  descriptiveText,
  color
}: {
  value: number;
  max: number;
  text: string;
  descriptiveText?: string;
  color?: BadgeProps["color"] | "accent";
}) => {
  if (value > max) {
    throw new Error("value must be smaller than max");
  }

  return (
    <Flex gap="2" align="center" justify="center">
      {/** @ts-ignore */}
      <Badge color={color ?? "accent"}>{text}</Badge>
      <Progress
        value={value}
        max={max}
        className="w-20"
        /** @ts-ignore */
        color={color ?? "accent"}
      />
      {descriptiveText === undefined ? value : descriptiveText}
    </Flex>
  );
};

import { DotFilledIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";

export const BulletPoint = ({ index, text }: { index?: number; text: string }) => {
  return (
    <Flex gap="0" direction="row" align="start" justify="center">
      {index === undefined ? (
        <DotFilledIcon className="max-w-10 min-w-10 mt-1" />
      ) : (
        <Text size="3" weight="medium" className="max-w-10 min-w-10">
          {index}.
        </Text>
      )}
      <Text size="3">{text}</Text>
    </Flex>
  );
};

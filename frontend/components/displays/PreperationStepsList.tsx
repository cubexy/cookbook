import { Flex, Text } from "@radix-ui/themes";
import { BulletPoint } from "./BulletPoint";
import { Recipe } from "@/app/recipes/[id]/page";

export const PreperationStepsList = ({ steps }: { steps: Recipe["steps"] }) => {
  return (
    <Flex className="my-2" direction="column" align="start" gap="2">
      <Text size="4">Zubereitung</Text>
      {steps.map((step, index) => (
        <BulletPoint key={index} index={index + 1} text={step} />
      ))}
    </Flex>
  );
};

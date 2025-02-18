import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";

export const AIDIsclaimer = () => {
  return (
    <Flex direction="row" align="center" justify="center" gap="2">
      <a
        href="https://digital-strategy.ec.europa.eu/de/policies/regulatory-framework-ai"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <InfoCircledIcon />
      </a>

      <Text size="1">
        Die Genererierung und Umwandlung von Rezepten wird durch KI unterstützt.
      </Text>
    </Flex>
  );
};

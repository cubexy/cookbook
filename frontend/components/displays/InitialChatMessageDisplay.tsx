import { MagicWandIcon } from "@radix-ui/react-icons";
import { Avatar, Flex, Text } from "@radix-ui/themes";

export const InitialChatMessageDisplay = () => {
  return (
    <Flex
      direction="row"
      align="start"
      justify="start"
      gap="3"
      className="w-full"
    >
      <Avatar fallback={<MagicWandIcon />} size={"2"} className="shadow-md" />
      <Text>
        Lass uns gemeinsam dein Rezept hinzufügen! Gib mir dazu etwa deine{" "}
        <Text weight="medium">verwendeten Zutaten</Text>, eine Liste von{" "}
        <Text weight="medium">Arbeitsschritten</Text> oder auch gerne deinen
        persönlichen <Text weight="medium">Geheimtipp</Text>.
      </Text>
    </Flex>
  );
};

import { MagicWandIcon } from "@radix-ui/react-icons";
import { Avatar, Flex, Text } from "@radix-ui/themes";
import TypeIt from "typeit-react";

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
      <TypeIt
        options={{
          speed: 30,
          waitUntilVisible: true,
          cursorChar: "▮",
          lifeLike: true
        }}
      >
        Lass uns gemeinsam dein Rezept hinzufügen! Gib mir dazu etwa deine{" "}
        <Text weight="medium">verwendeten Zutaten</Text>, eine Liste von{" "}
        <Text weight="medium">Arbeitsschritten</Text> oder auch gerne deinen
        persönlichen <Text weight="medium">Geheimtipp</Text>! Ich werde aus den
        Informationen ein Rezept erstellen.
      </TypeIt>
    </Flex>
  );
};

"use client";

import { AIDIsclaimer } from "@/components/displays/AIDisclaimer";
import { InitialChatMessageDisplay } from "@/components/displays/InitialChatMessageDisplay";
import { ChatInput } from "@/components/inputs/ChatInput";
import { Card, Flex, Grid } from "@radix-ui/themes";
import { useTheme } from "next-themes";

const AddRecipe = () => {
  const theme = useTheme();

  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      gap="6"
      className="w-full max-w-[600px] min-h-[calc(100dvh-72px-50px)]"
    >
      <InitialChatMessageDisplay />
      <Flex
        align="center"
        direction="column"
        justify="center"
        gap="4"
        className="w-full min-h-fit"
      >
        <ChatInput />
        <AIDIsclaimer />
      </Flex>
    </Flex>
  );
};

export default AddRecipe;

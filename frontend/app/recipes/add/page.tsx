"use client";

import { ChatInput } from "@/components/inputs/ChatInput";
import useAutosizeTextArea from "@/utils/useAutosizeTextArea";
import {
  ArrowUpIcon,
  CameraIcon,
  FileIcon,
  PaperPlaneIcon,
  PlusCircledIcon,
  RocketIcon,
  SpeakerLoudIcon
} from "@radix-ui/react-icons";
import { Card, Flex, IconButton, Tooltip, Text } from "@radix-ui/themes";
import { useRef, useState } from "react";

const AddRecipe = () => {
  return (
    <Flex
      direction="column"
      align="center"
      gap="3"
      className="w-full h-[calc(100dvh-4.5rem-4rem)]"
    >
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>
      <p>hallo</p>

      <div className="flex-grow" />
      <ChatInput />
    </Flex>
  );
};

export default AddRecipe;

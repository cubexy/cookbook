"use client";

import useAutosizeTextArea from "@/utils/useAutosizeTextArea";
import {
  CameraIcon,
  ChatBubbleIcon,
  FileIcon,
  FilePlusIcon,
  MagnifyingGlassIcon,
  PaperPlaneIcon,
  Pencil2Icon,
  SpeakerLoudIcon
} from "@radix-ui/react-icons";
import {
  Button,
  Card,
  Flex,
  IconButton,
  Text,
  TextArea,
  TextField
} from "@radix-ui/themes";
import { useRef, useState } from "react";

const AddRecipe = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };
  return (
    <Flex direction="column" align="center" gap="3" className="w-full h-fit">
      <Card className="w-full max-w-[600px] p-4">
        <Flex direction="column" gap="3">
          <textarea
            placeholder="Send a message..."
            className="w-full overflow-hidden resize-none min-h-[42px] max-h-[calc(75dvh)] text-sm focus:outline-none"
            rows={2}
            onChange={handleChange}
            ref={textAreaRef}
            value={value}
          />
          <Flex direction="row" justify="between" align="center">
            <IconButton variant="ghost">
              <FileIcon />
            </IconButton>
            <IconButton variant="ghost">
              <PaperPlaneIcon />
            </IconButton>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default AddRecipe;

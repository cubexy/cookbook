"use client";

import useAutosizeTextArea from "@/utils/useAutosizeTextArea";
import {
  ArrowUpIcon,
  FileIcon,
  PaperPlaneIcon,
  RocketIcon,
  SpeakerLoudIcon
} from "@radix-ui/react-icons";
import { Card, Flex, IconButton, Tooltip } from "@radix-ui/themes";
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
      <Card className="w-full max-w-[600px] pt-4 pl-4 pb-2 pr-2">
        <Flex direction="column" gap="3">
          <textarea
            placeholder="Beschreib mir dein Rezept..."
            className="w-full overflow-hidden resize-none min-h-[42px] max-h-[calc(75dvh)] text-md md:text-sm focus:outline-none bg-transparent"
            rows={2}
            onChange={handleChange}
            ref={textAreaRef}
            autoFocus
            value={value}
          />
          <Flex direction="row" justify="between" align="center">
            <Tooltip content="Bild hinzufügen">
              <IconButton variant="ghost">
                <FileIcon />
              </IconButton>
            </Tooltip>
            <Flex direction="row" align="center" gap="3">
              <Tooltip content="Sprachaufnahme starten">
                <IconButton variant="ghost">
                  <SpeakerLoudIcon />
                </IconButton>
              </Tooltip>
              <Tooltip content="Rezept hinzufügen">
                <IconButton variant="soft">
                  <RocketIcon />
                </IconButton>
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default AddRecipe;

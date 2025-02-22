import useAutosizeTextArea from "@/utils/useAutosizeTextArea";
import { CameraIcon, SpeakerLoudIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Card, Flex, Tooltip, IconButton } from "@radix-ui/themes";
import { useState, useRef } from "react";

export const ChatInput = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };

  return (
    <Card className="w-full pt-4 pl-4 pb-2 pr-2">
      <Flex direction="column" gap="3">
        <textarea
          placeholder="Beschreib mir dein Rezept..."
          className="w-full overflow-hidden resize-none min-h-[42px] max-h-[calc(75dvh)] focus:outline-none bg-transparent pr-2"
          rows={2}
          autoComplete="off"
          onChange={handleChange}
          ref={textAreaRef}
          autoFocus
          value={value}
        />
        <Flex direction="row" justify="between" align="center">
          <Tooltip content="Mach ein Foto von deinem Rezept (Noch nicht unterstützt!)">
            <IconButton variant="ghost" disabled>
              <CameraIcon />
            </IconButton>
          </Tooltip>
          <Flex direction="row" align="center" gap="3">
            <Tooltip content="Erzähl mir von deinem Rezept (Noch nicht unterstützt!)">
              <IconButton variant="ghost" disabled>
                <SpeakerLoudIcon />
              </IconButton>
            </Tooltip>
            <Tooltip content="Rezept hinzufügen">
              <IconButton variant="soft">
                <PaperPlaneIcon />
              </IconButton>
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

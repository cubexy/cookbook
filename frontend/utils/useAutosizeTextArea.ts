import { useEffect } from "react";

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string, minHeight = 42) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = Math.max(scrollHeight.valueOf(), minHeight) + "px";
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;

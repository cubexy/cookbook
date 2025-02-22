"use client";

import * as React from "react";
import classNames from "classnames";
import { composeRefs } from "radix-ui/internal";
import {
  GetPropDefTypes,
  marginPropDefs,
  MarginProps,
  textFieldRootPropDefs,
  textFieldSlotPropDefs
} from "@radix-ui/themes/props";
import { ComponentPropsWithout, NotInputTextualAttributes, extractProps, RemovedProps } from "@radix-ui/themes/helpers";

type NumericTextFieldRootElement = React.ElementRef<"input">;
type NumericTextFieldRootOwnProps = GetPropDefTypes<typeof textFieldRootPropDefs> & {
  defaultValue?: string | number;
  value?: string | number;
  type?:
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
};
type NumericTextFieldInputProps = ComponentPropsWithout<
  "input",
  NotInputTextualAttributes | "color" | "defaultValue" | "size" | "type" | "value"
>;
interface NumericTextFieldRootProps extends NumericTextFieldInputProps, MarginProps, NumericTextFieldRootOwnProps {}
const NumericTextFieldRoot = React.forwardRef<NumericTextFieldRootElement, NumericTextFieldRootProps>(
  (props, forwardedRef) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { children, className, color, radius, style, ...inputProps } = extractProps(
      props,
      textFieldRootPropDefs,
      marginPropDefs
    );
    return (
      <div
        data-accent-color={color}
        data-radius={radius}
        style={style}
        className={classNames("rt-TextFieldRoot", className)}
        onPointerDown={(event) => {
          const target = event.target as HTMLElement;
          if (target.closest("input, button, a")) return;

          const input = inputRef.current;
          if (!input) return;

          // Same selector as in the CSS to find the right slot
          const isRightSlot = target.closest(`
            .rt-TextFieldSlot[data-side='right'],
            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])
          `);

          const cursorPosition = isRightSlot ? input.value.length : 0;

          requestAnimationFrame(() => {
            // Only some input types support this, browsers will throw an error if not supported
            // See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange#:~:text=Note%20that%20according,not%20support%20selection%22.
            try {
              input.setSelectionRange(cursorPosition, cursorPosition);
            } catch {}
            input.focus();
          });
        }}
      >
        <input
          spellCheck="false"
          {...inputProps}
          ref={composeRefs(inputRef, forwardedRef)}
          className="rt-reset rt-TextFieldInput"
          type="number"
        />
        {children}
      </div>
    );
  }
);
NumericTextFieldRoot.displayName = "TextField.Root";

type NumericTextFieldSlotElement = React.ElementRef<"div">;
type NumericTextFieldSlotOwnProps = GetPropDefTypes<typeof textFieldSlotPropDefs>;
interface NumericTextFieldSlotProps extends ComponentPropsWithout<"div", RemovedProps>, NumericTextFieldSlotOwnProps {}
const NumericTextFieldSlot = React.forwardRef<NumericTextFieldSlotElement, NumericTextFieldSlotProps>(
  (props, forwardedRef) => {
    const { className, color, side, ...slotProps } = extractProps(props, textFieldSlotPropDefs);
    return (
      <div
        data-accent-color={color}
        data-side={side}
        {...slotProps}
        ref={forwardedRef}
        className={classNames("rt-TextFieldSlot", className)}
      />
    );
  }
);
NumericTextFieldSlot.displayName = "TextField.Slot";

export { NumericTextFieldRoot as NumericInputRoot, NumericTextFieldSlot as NumericInputSlot };
export type { NumericTextFieldRootProps as RootProps, NumericTextFieldSlotProps as SlotProps };

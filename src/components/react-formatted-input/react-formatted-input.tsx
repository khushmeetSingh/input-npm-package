import React from "react";
import { InputHTMLAttributes, ReactNode } from "react";
import { format } from "../format";

export type FormattedInputProps = {
  autocomplete?: string;
  defaultValue: string | undefined;
  errors?: boolean | undefined;
  errorTitle?: string;
  hiddenLabel?: boolean;
  hintExpander?: boolean;
  hintExpanderContent?: string | ReactNode;
  hintExpanderLabel?: string;
  hintId?: string;
  hintText?: string;
  id: string;
  inputSize?: string;
  labelSize?: "default" | "large";
  name: string;
  numberFormatDefaultValue?: string | undefined;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  text?: string;
  type?: string;
  register?: (instance: HTMLInputElement | null) => void;
  required?: boolean;
  maxLength?: number;
  pattern?: string;
  placeholderText: string;
  formatTemplate: string;
  formatTemplateTemp: string;
  CustomInput?: React.ComponentType<
    React.InputHTMLAttributes<HTMLInputElement>
  >;
};

const FormattedInput = ({
  autocomplete,
  defaultValue,
  errors,
  errorTitle,
  id,
  inputSize,
  labelSize = "default",
  name,
  numberFormatDefaultValue,
  onBlur,
  onChange,
  text,
  type = "text",
  register,
  required,
  maxLength,
  pattern,
  placeholderText,
  formatTemplate,
  formatTemplateTemp,
  CustomInput,
}: FormattedInputProps) => {
  return CustomInput ? (
    <CustomInput
      aria-invalid={!!errors}
      type={type}
      id={id}
      name={name}
      defaultValue={defaultValue || numberFormatDefaultValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        const pos = event.target.selectionStart || 0;
        const formatReturnVal = format(event.target.value, formatTemplate, pos);
        event.target.value = formatReturnVal.res;

        event.target.setSelectionRange(
          formatReturnVal.newCaretPos,
          formatReturnVal.newCaretPos
        );
        onChange?.(event);
      }}
      onBlur={onBlur}
      data-errortitle={errorTitle}
      width={inputSize}
      autoComplete={autocomplete || "off"}
      maxLength={maxLength}
      pattern={pattern}
      placeholder={placeholderText}
    />
  ) : (
    <input
      aria-invalid={!!errors}
      type={type}
      id={id}
      name={name}
      defaultValue={defaultValue || numberFormatDefaultValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        const pos = event.target.selectionStart || 0;
        const formatReturnVal = format(event.target.value, formatTemplate, pos);
        event.target.value = formatReturnVal.res;

        event.target.setSelectionRange(
          formatReturnVal.newCaretPos,
          formatReturnVal.newCaretPos
        );
        onChange?.(event);
      }}
      onBlur={onBlur}
      ref={register}
      data-errortitle={errorTitle}
      width={inputSize}
      autoComplete={autocomplete || "off"}
      maxLength={maxLength}
      pattern={pattern}
      placeholder={placeholderText}
    />
  );
};

export default FormattedInput;

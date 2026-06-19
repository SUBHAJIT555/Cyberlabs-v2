"use client";

import { useEffect, useState } from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export const defaultDateTimeLocal = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.setHours(10, 0, 0, 0);
  return d.toISOString().slice(0, 16);
};

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-text-primary"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
    <path d="M16 3v4" />
    <path d="M8 3v4" />
    <path d="M4 11h16" />
    <path d="M7 14h.013" />
    <path d="M10.01 14h.005" />
    <path d="M13.01 14h.005" />
    <path d="M16.015 14h.005" />
    <path d="M13.015 17h.005" />
    <path d="M7.01 17h.005" />
    <path d="M10.01 17h.005" />
  </svg>
);

type DateTimePickerFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  error?: FieldError;
  labelClassName?: string;
  inputClassName?: string;
};

export function DateTimePickerField<T extends FieldValues>({
  label,
  name,
  register,
  rules,
  error,
  labelClassName = "block text-text-primary text-sm font-medium font-inter-display mb-2",
  inputClassName = "",
}: DateTimePickerFieldProps<T>) {
  const [isMobile, setIsMobile] = useState(false);
  const [minDateTime, setMinDateTime] = useState("");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    setMinDateTime(new Date().toISOString().slice(0, 16));
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      <label className={labelClassName}>
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type="datetime-local"
          {...register(name, rules)}
          min={minDateTime || undefined}
          className={`w-full cursor-pointer rounded-lg border bg-background px-3 py-2 text-sm text-text-primary transition-colors focus:outline-none focus:ring focus:ring-neutral-400 focus:ring-offset-2 sm:px-4 sm:py-3 sm:pr-12 sm:text-base md:focus-ring-offset-4 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:h-0 [&::-webkit-calendar-picker-indicator]:w-0 [&::-webkit-calendar-picker-indicator]:appearance-none ${error ? "border-red-400" : "border-neutral-300 focus:border-neutral-400"} ${inputClassName}`}
          style={{
            fontSize: isMobile ? "14px" : "16px",
            minHeight: isMobile ? "44px" : "auto",
            lineHeight: "1.2",
            WebkitAppearance: "none",
            MozAppearance: "textfield",
            colorScheme: "dark",
            paddingRight: "2.5rem",
          }}
          onFocus={(e) => {
            if (isMobile) e.target.style.fontSize = "16px";
          }}
          onBlur={(e) => {
            if (isMobile) e.target.style.fontSize = "14px";
          }}
        />
        <button
          type="button"
          className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer border-0 bg-transparent p-0 sm:right-4"
          onClick={(e) => {
            e.preventDefault();
            const input = (e.currentTarget as HTMLElement)
              .previousElementSibling as HTMLInputElement;
            if (input) {
              input.showPicker?.();
              input.focus();
            }
          }}
          aria-label="Open date and time picker"
        >
          <CalendarIcon />
        </button>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500 font-inter-display">{error.message}</p>
      )}
    </div>
  );
}

import { ISchema } from "@site/src/types";

export default [
  {
    _type: "text",
    title: "Title",
    name: "title",
    type: "string",
  },
  {
    _type: "toggle",
    title: "Prevent Close",
    name: "preventClose",
    type: "boolean",
  },
  {
    _type: "select",
    title: "Variant",
    name: "variant",
    type: "ButtonVariant",
    options: ["default", "primary", "success", "danger"],
  },
  {
    _type: "select",
    title: "Size",
    name: "size",
    type: "ButtonSize",
    options: ["sm", "md", "lg"],
  },
  {
    _type: "toggle",
    title: "Is Filled",
    name: "isFilled",
    type: "boolean",
  },
  {
    _type: "function",
    title: "onClick",
    name: "onClick",
    type: "function",
  },
] as ISchema[];

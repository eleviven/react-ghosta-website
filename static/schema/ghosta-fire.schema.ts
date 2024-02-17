import type { ISchema } from "@site/src/types";
import GhostaButton from "./ghosta-button.schema";

export default [
  {
    _type: "text",
    title: "Title",
    name: "title",
    type: "string",
  },
  {
    _type: "text",
    title: "Description",
    name: "description",
    type: "string",
  },
  {
    _type: "text",
    title: "Icon",
    name: "icon",
    type: "React.ReactNode",
  },
  {
    _type: "text",
    title: "Header Title",
    name: "headerTitle",
    type: "string",
  },
  {
    _type: "text",
    title: "Header Description",
    name: "headerDescription",
    type: "string",
  },
  {
    _type: "text",
    title: "Content",
    name: "content",
    type: "React.ReactNode",
  },
  {
    _type: "json",
    title: "Buttons",
    name: "buttons",
    type: "GhostaButtonOptions[]",
    schema: GhostaButton,
  },
  {
    _type: "select",
    title: "Alignment",
    name: "alignment",
    type: "left | center | right",
    defaultValue: "center",
    options: ["left", "center", "right"],
  },
  {
    _type: "toggle",
    title: "Show Close Button",
    name: "showCloseButton",
    type: "boolean",
    defaultValue: false,
  },
  {
    _type: "toggle",
    title: "Prevent Close",
    name: "preventClose",
    type: "boolean",
    defaultValue: false,
  },
  {
    _type: "select",
    title: "Size",
    name: "size",
    type: "sm | md | lg",
    defaultValue: "md",
    options: ["sm", "md", "lg"],
  },
  {
    _type: "schema",
    title: "Colors",
    name: "colors",
    type: "GhostaPopupElementColors",
  },
  {
    _type: "schema",
    title: "ClassNames",
    name: "classNames",
    type: "GhostaPopupClassNames",
  },
] as ISchema[];

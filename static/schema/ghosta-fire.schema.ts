import type { ISchema } from "@site/src/types";

export default [
  {
    _type: "text",
    name: "title",
    type: "string",
    defaultValue: "-",
    description: "Title under the icon",
  },
  {
    _type: "text",
    name: "description",
    type: "string",
    defaultValue: "-",
    description: "Description under the icon",
  },
  {
    _type: "text",
    name: "icon",
    type: "ReactNode",
    defaultValue: "-",
    description: "Render icon or any react element on popup inside circle box",
  },
  {
    _type: "text",
    name: "headerTitle",
    type: "string",
    defaultValue: "-",
    description: "Title above the icon",
  },
  {
    _type: "text",
    name: "headerDescription",
    type: "string",
    defaultValue: "-",
    description: "Description above the icon",
  },
  {
    _type: "text",
    name: "content",
    type: "ReactNode",
    defaultValue: "-",
    description: "Content under the icon",
  },
  {
    _type: "json",
    name: "buttons",
    type: "GhostaButtonOptions[]",
    defaultValue: "-",
    description: "Show button or buttons on the popup",
  },
  {
    _type: "select",
    name: "alignment",
    type: "left | center | right",
    defaultValue: "center",
    description: "Alignment of content of popup",
  },
  {
    _type: "toggle",
    name: "showCloseButton",
    type: "boolean",
    defaultValue: false,
    description: "Show close button on top right of popup",
  },
  {
    _type: "toggle",
    name: "preventClose",
    type: "boolean",
    defaultValue: false,
    description:
      "If true, popup won't close. You can close it just by using `ghosta.close` method",
  },
  {
    _type: "select",
    name: "size",
    type: "sm | md | lg",
    defaultValue: "md",
    description: "Size of the popup.",
  },
  {
    _type: "json",
    name: "colors",
    type: "GhostaPopupElementColors",
    defaultValue: "-",
    description: "All element colors of Popup can change by colors option",
  },
  {
    _type: "schema",
    name: "classNames",
    type: "GhostaPopupClassNames",
    defaultValue: "-",
    description:
      "All element classNames of Popup can change by classNames option",
  },
] as ISchema[];

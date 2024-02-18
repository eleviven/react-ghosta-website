export interface ISchema {
  _type: "toggle" | "text" | "select" | "json";

  name: string;
  type: string;
  defaultValue: any;
  description: string;
}

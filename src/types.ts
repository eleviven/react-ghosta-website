export interface ISchema {
  _type: "toggle" | "text" | "select" | "json";
  title: string;
  name: string;
  type: string;
  defaultValue?: any;
  options?: string[];
}

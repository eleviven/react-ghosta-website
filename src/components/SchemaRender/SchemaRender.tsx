import type { ISchema } from "@site/src/types";
import { useState, type BaseSyntheticEvent } from "react";
import CodeBlock from "@theme/CodeBlock";

export type SchemaRenderProps = {
  values?: Record<string, any>;
  schemaItem: ISchema;
  onChange: (key: string, value: any) => void;
};

const SchemaRender: React.FC<SchemaRenderProps> = ({
  schemaItem,
  values,
  onChange,
}) => {
  const value = values[schemaItem.name] || schemaItem.defaultValue;
  const [_value, _setValue] = useState(value);

  const handleBlur = ({ target }: BaseSyntheticEvent) => {
    const { name, value, checked, type } = target;

    if (type !== "checkbox") {
      onChange(name, value);
    } else {
      onChange(name, checked);
    }
  };

  const handleChange = (value: any) => {
    _setValue(value);
  };

  switch (schemaItem._type) {
    case "json": {
      return (
        <CodeBlock language="json">{JSON.stringify(_value, null, 2)}</CodeBlock>
      );
    }
    case "select": {
      const options = schemaItem.type?.split("|")?.map((i) => i.trim());
      return (
        <select
          name={schemaItem.name}
          value={_value || ""}
          onChange={handleBlur}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }
    case "toggle": {
      return (
        <input
          type="checkbox"
          name={schemaItem.name}
          checked={_value}
          onChange={handleBlur}
        />
      );
    }
    default: {
      return (
        <input
          type="text"
          name={schemaItem.name}
          value={_value || ""}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          className="w-full"
        />
      );
    }
  }
};

export default SchemaRender;

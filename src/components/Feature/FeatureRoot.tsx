import type { FeatureRootProps } from "./types";

import clsx from "clsx";

const FeatureRoot: React.FC<FeatureRootProps> = ({ children, className }) => {
  return <div className={clsx("row", className)}>{children}</div>;
};

export default FeatureRoot;

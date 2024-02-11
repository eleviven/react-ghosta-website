import type { FeatureItemProps } from "./types";

import clsx from "clsx";
import Heading from "@theme/Heading";

import styles from "./style.module.css";

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Icon className={styles.icon} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;

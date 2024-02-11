export type FeatureRootProps = {
  children: React.ReactNode;
  className?: string;
};

export type FeatureItemProps = {
  title: string;
  description: JSX.Element;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
};

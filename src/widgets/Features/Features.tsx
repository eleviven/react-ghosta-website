import clsx from "clsx";
import { Feature, FeatureItemProps } from "@site/src/components";

const FeatureList: FeatureItemProps[] = [
  {
    title: "Easy to Use",
    icon: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    icon: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    icon: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

type FeaturesProps = {
  className?: string;
};

const Features: React.FC<FeaturesProps> = ({ className }) => {
  return (
    <section className={clsx("py-10", className)}>
      <div className="container">
        <Feature.Root>
          {FeatureList.map((props, idx) => (
            <Feature.Item key={idx} {...props} />
          ))}
        </Feature.Root>
      </div>
    </section>
  );
};

export default Features;

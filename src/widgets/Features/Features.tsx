import clsx from "clsx";
import { Feature, FeatureItemProps } from "@site/src/components";

const FeatureList: FeatureItemProps[] = [
  {
    title: "Easy to Use",
    icon: () => (
      <img
        src={require("@site/static/img/ghosta_magic.png").default}
        width={130}
        height={130}
        draggable={false}
        className="select-none"
      />
    ),
    description: <>Ghosta provides an easy method & api to use</>,
  },
  {
    title: "Customizable",
    icon: () => (
      <img
        src={require("@site/static/img/ghosta_customization.png").default}
        width={130}
        height={130}
        draggable={false}
        className="select-none"
      />
    ),
    description: (
      <>
        You can use tailwindcss or custom css to customize all elements of
        Ghosta
      </>
    ),
  },
  {
    title: "Lightweight",
    icon: () => (
      <img
        src={require("@site/static/img/ghosta_lightning.png").default}
        width={130}
        height={130}
        draggable={false}
        className="select-none"
      />
    ),
    description: (
      <>
        Less than <code>30KB</code>
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

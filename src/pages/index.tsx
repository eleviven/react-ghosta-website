import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import clsx from "clsx";

import { Badges, Features } from "../widgets";

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* Hero */}
      <header className={clsx("hero hero--primary")}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="inline-flex items-center gap-3 mt-6">
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/introduction"
            >
              Get Started
            </Link>
          </div>
          <Badges className="!justify-center mt-6" />
        </div>
      </header>

      {/* Content */}
      <main>
        {/* Features */}
        <Features />
      </main>
    </Layout>
  );
};

export default Home;

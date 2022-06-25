import React from "react";
import Layout from "../components/layout";
import Divider from "../components/divider";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = ({ data }: any) => {
  return (
    <Layout pageTitle="Budeme se brát!">
      <div className="grid grid-cols-2 gap-2 p-5">
        <div>
          <StaticImage
            src="../../images/karolina_jakub.jpg"
            alt="Karolína a Jakub"
            height={600}
          />
        </div>
        <div className="h-500 grid content-center">
          <div className="text-4xl pb-5">Budeme se brát!</div>
          <div className="text-xl">
            Své <strong>ano</strong> si řekneme 22. 10. 2022 ve 13 hodin v
            Obřadní síni Vlašského dvora v Kutné Hoře.
          </div>
          <div className="text-base pt-5">
            Pokud nám chcete něco napsat, můžete tak učinit na
            <strong> svatba@stastka.xyz</strong>.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

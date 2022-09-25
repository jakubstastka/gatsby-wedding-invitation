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
            src="../../images/karolina_jakub_svatba.jpg"
            alt="Karolína a Jakub"
            height={600}
            quality={100}
          />
        </div>
        <div className="h-500 grid content-center space-y-4">
          <div className="text-4xl pb-5">Vzali jsme se!</div>
          <div className="text-xl">
            Své <strong>ano</strong> jsme si řekli 24. 9. 2022 ve 13 hodin v
            Obřadní síni Vlašského dvora v Kutné Hoře.
          </div>
          <div className="text-xl">
            Děkujeme všem, kteří s námi prožili náš den. Připravujeme fotografii
            a report ze svatby, která bez přehánění neměla obdoby!
          </div>
          <div className="text-base pt-5">
            Pokud jste na naší svatbě fotili, oceníme, když nám zašlete
            fotografie na <strong> svatba@stastka.xyz</strong>, abychom je mohli
            vystavit na našem webu.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

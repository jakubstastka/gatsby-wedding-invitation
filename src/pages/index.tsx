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
        <div className="">Budeme se brát!</div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;

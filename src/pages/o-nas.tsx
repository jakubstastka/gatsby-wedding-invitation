import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Divider from "../components/divider";

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="O nás">
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <div className="text-2xl text-emerald-600 pt-5 pb-2">
            {node.frontmatter.title}
          </div>
          <div className="text-base">
            {node.frontmatter.author === "Jakub" ? "Napsal " : "Napsala "}
            {node.frontmatter.author}
          </div>
          <Divider color="grey" />
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/(o-nas)/" } }) {
      nodes {
        frontmatter {
          title
          author
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;

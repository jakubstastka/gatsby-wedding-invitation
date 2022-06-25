import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="O nás">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/(o-nas)/" } }) {
      nodes {
        frontmatter {
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;

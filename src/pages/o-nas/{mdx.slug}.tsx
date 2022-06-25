import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className="pt-5" key={data.id}>
        <h2 className="text-4xl text-emerald-700">
          {data.mdx.frontmatter.title}
        </h2>
        <div className="pt-5">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default BlogPage;

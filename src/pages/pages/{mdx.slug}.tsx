import React from "react";
import { Link, graphql } from "gatsby";
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
        <p className="pt-5">
          <Link className="italic text-indigo-700" to={`/`}>
            Zpět
          </Link>
        </p>
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

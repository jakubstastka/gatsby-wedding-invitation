import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className="pt-5" key={data.id}>
        <h2 className="text-4xl text-emerald-700">
          {data.mdx.frontmatter.title}
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="pt-5">
            <GatsbyImage
              image={getImage(data.mdx.frontmatter.image)}
              alt={data.mdx.frontmatter.image_alt}
              quality={100}
            />
            <span className="text-base italic pt-5">
              {data.mdx.frontmatter.image_alt}
            </span>
          </div>
          <div className="pt-5 col-span-2">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
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
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        image_alt
      }
      body
    }
  }
`;

export default BlogPage;

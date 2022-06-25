import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Divider from "../components/divider";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="O nás">
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div>
              <GatsbyImage
                image={getImage(node.frontmatter.image)}
                alt="Placeholder"
              />
            </div>
            <div className="pt-5 pb-2">
              <Link
                className="text-4xl text-emerald-600"
                to={`/o-nas/${node.slug}`}
              >
                {node.frontmatter.title}
              </Link>
              <div className="text-base">
                {!node.frontmatter.author.endsWith("a")
                  ? "Napsal "
                  : "Napsala "}
                {node.frontmatter.author}
              </div>
            </div>
            <div className="pt-5 pb-2 pr-5">{node.frontmatter.summary}</div>
          </div>
          <Divider color="grey" />
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(o-nas)/" } }
      sort: { fields: frontmatter___sort_value, order: ASC }
    ) {
      nodes {
        frontmatter {
          sort_value
          title
          author
          image {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
          summary
        }
        slug
        id
        body
      }
    }
  }
`;

export default BlogPage;

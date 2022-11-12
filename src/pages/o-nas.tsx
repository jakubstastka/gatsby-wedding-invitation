import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import Divider from "../components/divider";
import { GatsbyImage, GatsbyImageProps, getImage } from "gatsby-plugin-image";

type Props = {
  allMdx: {
    nodes: {
      id: string;
      slug: string;
      frontmatter: {
        title: string;
        author: string;
        summary: string;
        sort_value: number;
        image: GatsbyImageProps;
      };
      body: string;
    }[];
  };
};

const BlogPage = ({ data }: PageProps<Props>) => {
  return (
    <Layout pageTitle="O nás">
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <div className="grid sm:grid-cols-1 sm:gap-0 md:grid-cols-3 md:gap-4 pt-2">
            <div>
              <GatsbyImage
                image={getImage(node.frontmatter.image)!}
                alt={node.frontmatter.title}
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
      sort: { fields: frontmatter___sort_value, order: DESC }
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

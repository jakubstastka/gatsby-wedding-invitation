import React from "react";
import NavMenu from "../components/navmenu";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }: any) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="mx-auto container max-w-5xl">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <main className="p-3">
        <h1 className="text-7xl font-bold pt-5 pb-5 text-center text-emerald-500">
          {data.site.siteMetadata.title}
        </h1>
        <NavMenu />
        <div className="p-3">{children}</div>
      </main>
    </div>
  );
};

export default Layout;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function About({data}) {
  return (
    <Layout>
      <h1>About me -> {data.site.siteMetadata.title}</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
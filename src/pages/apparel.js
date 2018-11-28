import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>Apparel</h1>
        <h4>{data.allMarkdownRemark.totalCount} Products</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.frontmatter.slug}>
              <h3>{node.frontmatter.title}{" "}</h3>

              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
          excerpt
        }
      }
    }
  }
`
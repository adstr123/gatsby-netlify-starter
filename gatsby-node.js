const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      // log errors
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      // log returned data
      console.log(result.data.allMarkdownRemark.edges[0]);
      // create pages
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            // context passed as props to the component & into component's GraphQL query
            slug: node.frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}
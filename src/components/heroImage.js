import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 */

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home-hero.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{maxHeight: `calc(100vh - 140px)`}}
      />}
  />
)
export default HeroImage

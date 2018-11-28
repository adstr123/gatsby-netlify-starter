import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

import '../css/layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            businessName
          }
        }
      }
    `}

    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Shop the Bone Idol Originals collection of stylish shearling coats, cashmere jumpers, English bridle leather collars, leads and 100% organic sheepskin bags..' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header businessName={data.site.siteMetadata.businessName} />

        {children}

        <Footer businessName={data.site.siteMetadata.businessName} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

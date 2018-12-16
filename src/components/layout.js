import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ProductProvider } from './context'
import Test from './test'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        products: allContentfulExample(
          filter: { node_locale: { eq: "en-US" } }
        ) {
          edges {
            node {
              name
              id
              description {
                description
              }
              image {
                fixed(width: 100) {
                  ...GatsbyContentfulFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ProductProvider data={data}>{children}</ProductProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

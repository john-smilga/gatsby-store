import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from 'gatsby-image'
import SEO from '../components/seo'
import { ProductConsumer } from '../components/context'
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <ProductConsumer>
        {value => {
          console.log(value.products[0].node.name)
          const products = value.products

          // return <h1> {value.products[0].node.name}</h1>
          return products.map(item => {
            const product = item.node
            return (
              <div key={product.id} style={{ margin: '4rem 0' }}>
                <h6>{product.name}</h6>
                <p>{product.description.description}</p>
                <Image fixed={product.image.fixed} />
              </div>
            )
          })
        }}
      </ProductConsumer>
      <h1>hello world</h1>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

// export const PageQuery = graphql`
//   query {
//     products: allContentfulExample(filter: { node_locale: { eq: "en-US" } }) {
//       edges {
//         node {
//           name
//           id
//           description {
//             description
//           }
//           image {
//             fixed(width: 100) {
//               ...GatsbyContentfulFixed
//             }
//           }
//         }
//       }
//     }
//   }
// `
/*
image {
        fixed(width: 100) {
          ...GatsbyContentfulFixed
        }
      }
*/

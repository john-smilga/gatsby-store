// import React from 'react'

// export default function test({ data }) {
//   const products = data.products.edges

//   return <div>{products[0].node.name}</div>
// }

import React, { Component } from 'react'

export default class test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: this.props.data.products.edges,
    }
  }
  render() {
    return <div>{this.state.products[0].node.name}</div>
  }
}

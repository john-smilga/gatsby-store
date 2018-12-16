import React, { Component } from 'react'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: this.props.data.products.edges,
      name: 'hello',
    }
  }
  render() {
    console.log(this.state.products)

    return (
      <ProductContext.Provider
        value={{ products: this.state.products, name: this.state.name }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer
export { ProductProvider, ProductConsumer }

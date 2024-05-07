import React, { Component } from 'react';
import TvcProductList from './components/TvcProductList';
import TvcProductAdd from './components/TvcProductAdd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: 'Lâm Viết Đạt', id: 22001234, status: 1 },
        { title: 'Cabbage', id: 1, status: 1 },
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'Samsung', id: 4, status: 1 },
      ],
    };
  }

  tvcHandleSubmit = (param) => { // Corrected typo and arrow function syntax
    console.log("App:", param);
    // Add to products array
    const newProducts = [...this.state.products, param]; // Use spread syntax for immutability
    this.setState({ products: newProducts });
  }

  render() {
    return (
      <div className='container border mt-5'>  {/* Corrected class name */}
        <h1>Lâm Viết Đạt - Render Data - Event Form</h1>
        <hr />
        <TvcProductList renderProducts={this.state.products} />
        <hr />
        <TvcProductAdd onSubmit={this.tvcHandleSubmit} />  {/* Corrected prop name */}
      </div>
    );
  }
}

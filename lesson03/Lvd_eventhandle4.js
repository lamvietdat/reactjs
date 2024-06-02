import React, { Component } from 'react'

export default class Lvd_eventhandle4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Lâm viết Đạt"
        }

    }
    handleGetName = () =>{
        alert(this.props.name);
        this.setState({
            name: this.props.name,
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
            <h2>lấy dữ liệu props</h2>
            <button onClick={this.handleGetName}>Get Name :</button>
            <h2>Welcome to, {this.state.name}</h2>
      </div>
    )
  }
}
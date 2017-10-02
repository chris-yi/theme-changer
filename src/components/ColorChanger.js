import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);

    // props = {
    //   update: fn,
    //   canUpdate: "true"
    // }



    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps

  render() {
    return (
      <select className="dropDownContainer" onChange={ (e) => this.props.update( e.target.value ) }>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}
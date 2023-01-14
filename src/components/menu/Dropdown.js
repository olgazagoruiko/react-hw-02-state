import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component{
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }))
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? "Приховати" : "Показати"}
        </button>
        {this.state.visible && (
          <ul className="Dropdown__menu">
            <li className="Dropdown__menu__item">Home</li>
            <li className="Dropdown__menu__item">Projects</li>
            <li className="Dropdown__menu__item">Contactu</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
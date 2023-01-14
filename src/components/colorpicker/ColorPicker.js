import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component{
  constructor() {
    super();
    this.state = {
      activeOptionIdx: 0,
    };
  }
  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  }
  makeOptionsClassName = (index) => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option__active');
    }
    return optionClasses.join(' ');
  }
  
  render() {
    const activeOptionLabel = this.props.options[this.state.activeOptionIdx];
    // console.log(activeOptionLabel);
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p className='ColorPicker__text'>Вибраний колір: {activeOptionLabel.label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionsClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
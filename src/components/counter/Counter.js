import React from 'react';
import   './Counter.css';


class Counter extends React.Component{
  // static defaultProps = {
  //     initialValue: 0,
  //   }
  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

    handleIncrement = () => {
      this.setState(prevState => ({
        value: prevState.value + 1,
      }))
    };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }))
  };

  
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
import React from "react";

class Squares extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      block1: 'red',
      block2: 'blue'
    }
  }
  block1Click = () => {
    this.setState((prevState) => ({
      block1: prevState.block1 === 'red' ? 'blue' : 'red',
      block2: prevState.block2 === 'blue' ? 'red' : 'blue'
    }));
  };

  block2Click = () => {
    this.setState((prevState) => ({
      block1: prevState.block1 === 'red' ? 'blue' : 'red',
      block2: prevState.block2 === 'blue' ? 'red' : 'blue'
    }));
  };

  render() {
    return (
        <div className="App">
          <div
              className="square"
              style={{ backgroundColor: this.state.block1 }}
              onClick={this.block1Click}
          ></div>
          <div
              className="square"
              style={{ backgroundColor: this.state.block2 }}
              onClick={this.block2Click}
          ></div>
        </div>
    );
  }
}

export default Squares;



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
      square1Color: prevState.square1Color === 'red' ? 'blue' : 'red'
    }));
  };

  block2Click = () => {
    this.setState((prevState) => ({
      square2Color: prevState.square2Color === 'blue' ? 'red' : 'blue'
    }));
  };

  render() {
    return (
        <div className="App">
          <div
              className="square"
              style={{ backgroundColor: this.state.square1Color }}
              onClick={this.block1Click}
          ></div>
          <div
              className="square"
              style={{ backgroundColor: this.state.square2Color }}
              onClick={this.block2Click}
          ></div>
        </div>
    );
  }
}

export default Squares;



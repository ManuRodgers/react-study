import React, { Component } from "react";
import PropTypes from "prop-types";
import Bar from "./Bar/Bar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 100,
      g: 200,
      b: 123
    };
  }

  setColor = (color, value) => {
    this.setState({ [color]: value });
  };

  render() {
    const { r, g, b } = this.state;

    return (
      <div>
        <div
          style={{
            width: 200,
            height: 200,
            backgroundColor: `rgb(${r},${g},${b})`
          }}
        />

        {Object.keys(this.state).map((color, index) => {
          return (
            <Bar
              key={color}
              setColor={this.setColor}
              color={color}
              value={this.state[color]}
            />
          );
        })}
      </div>
    );
  }
}

App.propTypes = {};

export default App;

import React, { Component } from "react";
import PropTypes from "prop-types";

class Bar extends Component {
  render() {
    const { color, setColor,value } = this.props;

    return (
      <div>
        <p>
          <label htmlFor={color}>{color}:</label>
          <input
            max={255}
            min={0}
            type="range"
            name={color}
            id={color}
            value={value}
            onChange={e => {
              const value = e.target.value;
              setColor(color, value);
            }}
          />
          <input
            max={255}
            min={0}
            type="number"
            name={color}
            id={color}
            value={value}
            onChange={e => {
              const value = e.target.value;
              setColor(color, value);
            }}
          />
        </p>
      </div>
    );
  }
}

Bar.propTypes = {};

export default Bar;

import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/button/Button";
import Display from "../components/display/display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

export default class Calculator extends Component {
  state = { ...initialState };

  clearMemory() {
    this.setState({ ...initialState });
  }

  addDigit(n) {
    const { displayValue } = this.state;

    if (n === "." && displayValue.includes(".")) return;

    const clearDisplay = displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : displayValue;

    this.setState({
      displayValue: currentValue + n,
      clearDisplay: false
    });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(currentValue + n);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
    }
  }

  setOperator(operation) {
    if (this.state.current === 0) {
      this.setState({
        operation,
        current: 1,
        clearDisplay: true
      });
    } else {
      const equals = operation === "=";
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals
      });
    }
  }

  render() {
    const addDigit = n => this.addDigit(n);

    const setOperator = operator => this.setOperator(operator);

    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button
          label="AC"
          click={() => this.clearMemory()}
          className="triple"
        />
        <Button label="/" click={setOperator} className="operation" />
        <Button label="7" click={addDigit} />
        <Button label="8" click={addDigit} />
        <Button label="9" click={addDigit} />
        <Button label="*" click={setOperator} className="operation" />
        <Button label="4" click={addDigit} />
        <Button label="5" click={addDigit} />
        <Button label="6" click={addDigit} />
        <Button label="-" click={setOperator} className="operation" />
        <Button label="1" click={addDigit} />
        <Button label="2" click={addDigit} />
        <Button label="3" click={addDigit} />
        <Button label="+" click={setOperator} className="operation" />
        <Button label="0" click={addDigit} className="double" />
        <Button label="." click={addDigit} />
        <Button label="=" click={setOperator} className="operation" />
      </div>
    );
  }
}

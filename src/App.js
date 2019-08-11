import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css'
import { Slider, InputNumber, Row, Col } from "antd"


class IntegerStep extends React.Component {
   render() {
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={20}
            onChange={this.props.onChildChange}
            value={typeof this.props.inputValue === "number" ? this.props.inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={20}
            style={{ marginLeft: 16 }}
            value={this.props.inputValue}
            onChange={this.props.onChildChange}
          />
        </Col>
      </Row>
    )
  }
}

class IntegerStepMultiplier extends React.Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={20}
            onChange={this.props.onMultiplierChange}
            value={
              typeof this.props.inputMultiplier === "number"
                ? this.props.inputMultiplier
                : 0
            }
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={20}
            style={{ marginLeft: 16 }}
            value={this.props.inputMultiplier}
            onChange={this.props.onMultiplierChange}
          />
        </Col>
      </Row>
    )
  }
}


class App extends React.Component {
  state = {
    inputValue: 0,
    multiplier: 0
  }

  onChildChange = value => {
    this.setState(() => ({
      inputValue: value
    }))
  }

  onMultiplierChange = value => {
    this.setState(() => ({
      multiplier: value
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Factor:
          <IntegerStep
            onChildChange={this.onChildChange}
            inputValue={this.state.inputValue}
          />
          Multiplier:
          <IntegerStepMultiplier
            onMultiplierChange={this.onMultiplierChange}
            inputMultiplier={this.state.multiplier}
          />
          <p>
            {" "}
            Change the slider to see the result of the factor, <b className="input">{this.state.inputValue} </b>. Multiplied by the multiplier, <b className="input">{this.state.multiplier}</b> <b className="result">Result :
            {this.state.inputValue * this.state.multiplier} </b>
          </p>
        </header>
      </div>
    )
  }
}

export default App;

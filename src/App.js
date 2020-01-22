import React, { Component } from "react";

class App extends Component{
  constructor (props){
    super(props);

    this.state = {
      count: 0
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let state = this.state;
    state.count += 1;
    this.setState(state);
  }

  decrease() {
    let state = this.state;
    state.count = state.count > 0 ? (state.count -= 1) : state.count;
    this.setState(state);
  }

  render(){
    return (
      <div>
        <h1> Contador </h1>
        <button onClick={this.decrease}>-</button>
        {this.state.count}
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class App extends Component{
  constructor (props){
    super(props);

    this.state = {
      count: 0,
      horas: '00:00:00'
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({horas: new Date().toLocaleTimeString()})
    }, 1000)
  }

  componentDidUpdate() {
    //When the component is updated
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
        <h2>Horas: {this.state.horas}</h2>
        <button onClick={this.decrease}>-</button>
        {this.state.count}
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default App;

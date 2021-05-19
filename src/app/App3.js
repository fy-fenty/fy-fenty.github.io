import React, { Component, PureComponent, useEffect } from "react";

class Cmp1 extends Component {
  componentDidUpdate() {
    console.log('cmp refershed');
  }
  render() {
    return `123123`;
  }
}

class PreCmp extends PureComponent {
  componentDidUpdate() {
    console.log('purcmp refershed');
  }
  render() {
    return `123123`;
  }
}

function Func1(props) {
  useEffect(() => {
    console.log('refershed');
  })
  return `hahah`;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      a1: {
        name: 'h'
      }
    }
  }
  render() {
    const { a1 } = this.state;
    return (
      <div>
        <input value={a1.name} onChange={(e) => {
          let a2 = { ...a1, name: e.target.value };
          // a1.name = e.target.value;
          this.setState({ a1: a2 });
        }} />
        <div>PreCmp: <PreCmp {...this.state}></PreCmp></div>
        <div>cmp1: <Cmp1 {...this.state}></Cmp1></div>
        <div>func1: <Func1 {...this.state}></Func1></div>
      </div>
    )
  }
}

export default App;

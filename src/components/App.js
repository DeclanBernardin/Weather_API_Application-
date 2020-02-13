import React, { Component } from 'react';
import { connect } from 'react-redux'
 


class App extends Component {
  render() {
  return (
    <div >
      <h1>Weather Teller</h1>
      <button onClick={() => this.props.dispatch({type: 'reducerTest'})}>Reducer Test</button>
    </div>
  );
  }
}

export default connect()(App);

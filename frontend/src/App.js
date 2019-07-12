import React from 'react';
import Nav from './Nav';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { session: "" }
  }


  callApi() {
    fetch("http://localhost:9000/session")
      .then(res => res.text())
      .then(res => this.setState({ session: res }))
      .catch(err => err)
  }

  componentDidMount() {
    this.callApi()
  }
  render() {
    return (
      <div className='App'>
      <div id="left" class="column">
        <div className="top-left">
          <h1>Menu</h1>
        </div>
        <div className="bottom">
          <Nav />
        </div>
      </div>
      <div id="right" className="column">
        <div className="top-right">
          <h1>Altoids</h1>
        </div>
        <div className="bottom">
          <pre id="Script">{this.state.session}</pre>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

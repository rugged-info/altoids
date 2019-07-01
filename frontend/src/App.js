import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { session: "" }
    }
  

  callApi() {
    fetch("http://localhost:9000/session")
      .then(res => res.text())
      .then(res => this.setState({ session: res}))
      .catch(err => err)
    } 

  componentDidMount(){
    this.callApi()
  }    
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <p className='App-intro'>{this.state.session}</p>
      </header>
    </div>
  );
  }
}

export default App;

import { Component } from "react";
import "./App.css";

class App extends Component {
 
    state = {
      meaningOfLife: 47,
    };
  
  handleClick = () => {
    this.setState(
      (prevState, prevProp) => {
       return {meaningOfLife: prevState.meaningOfLife + prevProp.increment} ;
      },
      () => console.log(this.state.meaningOfLife)
    );
  };
  render() {
    return (
      <div className="App">
        <p>{this.state.meaningOfLife}</p>
        <button onClick={this.handleClick}>Change state</button>
      </div>
    );
  }
}

export default App;

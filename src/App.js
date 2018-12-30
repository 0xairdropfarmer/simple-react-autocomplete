import React, { Component } from "react";
import Autocomplete from "./Autocomplete";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Autocomplete
          suggestions={["White", "Black", "Green", "Blue", "Yellow", "Red"]}
        />
      </div>
    );
  }
}

export default App;

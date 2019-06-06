import React from "react";
import FilteredList from "./FilteredList";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      fruits: []
    };
    this.url =
      "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits";
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  async componentDidMount() {
    try {
      const response = await fetch(this.url);

      if (!response.ok) {
        throw new Error("Something bad happened!");
      }

      const fruits = await response.json();
      this.setState({ fruits });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <h1>React Fruit Basket</h1>
        <input
          type="text"
          placeholder="search for fruits here!"
          onChange={this.handleChange}
        />
        <h2>
          Currently Searching: {!this.state.text ? "..." : this.state.text}
        </h2>
        <ul>
          <FilteredList list={this.state.fruits} text={this.state.text} />
        </ul>
      </div>
    );
  }
}

export default App;

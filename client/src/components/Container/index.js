import React, { Component } from "react";
import api from "../../utils/Api";
import Book from "../Book";
import { List } from "../List";

class Container extends Component {
  state = {
    googleResults: [],
    search: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    api.getBook(this.state.search).then(res => {
      this.setState({
        googleResults: res.data.items
      });
      console.log(res.data.items);
    });
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          Search for Books
          <br></br>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleFormSubmit}>Search</button>
        </div>
        <List>
          {this.state.googleResults.map(displayBook => (
            <Book
              title={displayBook.volumeInfo.title}
              authors={displayBook.volumeInfo.authors}
              description={displayBook.volumeInfo.description}
              image={displayBook.volumeInfo.imageLinks.thumbnail}
              link={displayBook.volumeInfo.info}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default Container;

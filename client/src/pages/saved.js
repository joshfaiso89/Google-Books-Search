import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Saved from "../components/Saved";
import List from '../components/List';
import Book from '../components/Book';
import api from "../utils/Api";
 

export default class Home extends Component {
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
    
      handleSavedBook = userData => {
        console.log(userData);
      api.postBookDB(userData).then(response => {
                console.log(response)
      })
    }

    componentDidMount() {
        api.getBookDB(this.state.search).then(res => {
          this.setState({
            googleResults: res.data
          });
          console.log(res.data);
        });
      };

  render() {
    return (
      <div>
        <Nav />
        <br></br>
        <List>
          {this.state.googleResults.map(displayBook => (
            <Book
              title={displayBook.title}
              authors={displayBook.authors}
              description={displayBook.description}
              image={displayBook.picture}
              link={displayBook.info}
              handleOnClick = {handleSavedBook}
            />
          ))}
        </List>
        <br></br>
        <br></br>
      </div>
    );
  }
}

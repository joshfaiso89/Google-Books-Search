import React, { Component } from "react";
import Nav from "../components/Nav";
import List from '../components/List';
import Book from '../components/Book';
import api from "../utils/Api";
// import Delete from '../components/DeleteBtn';

export default class Home extends Component {
    state = {
        bookResults: [],
        search: ""
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    //   handleSavedBook = userData => {
    //     console.log(userData);
    //   api.postBookDB(userData).then(response => {
    //             console.log(response)
    //   })
    // }

    componentDidMount() {
        api.getBookDB().then(res => {
          this.setState({
            bookResults: res.data
          });
          
          console.log(res.data);
        });
      };

    handleDelete = (id) => {
      console.log('IDIDID', id)
      api.deleteBookDB(id).then(res => {
        console.log(res);
        window.location.href="/saved";
      })
    }

  render() {
    return (
      <div>
        <Nav />
        <br></br>
        <List>
          {this.state.bookResults.map(displayBook => (
            <Book
            title={displayBook.title}
            authors={displayBook.author}
            description={displayBook.description}
            image={displayBook.picture}
            link={displayBook.info}
              id={displayBook._id}
              handleDelete={this.handleDelete}
            />
          ))}
          
        </List>
        <br></br>
        <br></br>
      </div>
    );
  }
}

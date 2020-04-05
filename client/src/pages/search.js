import React, {Component} from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import api from '../utils/Api';

export default class Home extends Component {
    state = {
        googleResults: [],
        search: ""
      }
    
      handleSavedBook = userData => {
          console.log(userData);
        api.postBookDB(userData).then(response => {
                  console.log(response)
        })
      }
    
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
        return(
        
        <div>
                <Nav />
                <br></br>
                <Jumbotron  />
                <br></br>
                <br></br>
               <Container  search={this.state.search}
                googleResults = {this.state.googleResults}
                handleFormSubmit = {this.handleFormSubmit}
                handleInputChange = {this.handleInputChange}
                handleSavedBook = {this.handleSavedBook}
                />
            </div>
        )
    }
}
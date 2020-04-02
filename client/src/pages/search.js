import React, {Component} from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";

export default class Home extends Component {
    render() {
        return(
            <div>
                <Nav />
                <br></br>
                <Jumbotron />
                <br></br>
                <br></br>
                <Container />
            </div>
        )
    }
}
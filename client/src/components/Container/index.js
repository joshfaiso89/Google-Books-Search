import React from "react";
// import api from "../../utils/Api";
import Book from "../Book";
import { List } from "../List";

function Container ({ search, handleFormSubmit, 
  handleInputChange, handleSavedBook, googleResults})  {
 
    return (
      <div>
        <div className="jumbotron">
          Search for Books
          <br></br>
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleInputChange}
          />
          <button onClick={handleFormSubmit}>Search</button>
        </div>
        <List>
          { googleResults !=null ? googleResults.map(displayBook => (
            <Book
              title={displayBook.volumeInfo.title}
              authors={displayBook.volumeInfo.authors}
              description={displayBook.volumeInfo.description}
              image={displayBook.volumeInfo.imageLinks.thumbnail}
              link={displayBook.volumeInfo.info}
              handleOnClick = {handleSavedBook}
            />
          )) :""}
        </List>
      </div>
    );
  }


export default Container;

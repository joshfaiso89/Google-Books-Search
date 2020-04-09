import React from "react";
import { List, ListItem } from "../List";

function Delete ({ handleDelete }) {
  return (
    <div>
       <div className="jumbotron">
          Saved Books
          <br></br>
          <input
            type="text"
            name="saved"
            value={saved}
            onChange={handleInputChange}
          />
          <button onClick={handleFormSubmit}>Saved</button>
        </div>
        <List>
          { googleResults !=null ? googleResults.map(displayBook => (
            <Book
              title={displayBook.volumeInfo.title}
              authors={displayBook.volumeInfo.authors}
              description={displayBook.volumeInfo.description}
              image={displayBook.volumeInfo.imageLinks.thumbnail}
              link={displayBook.volumeInfo.info}
              handleOnClick = {handleDelete}
            />
          )) :""}
        </List>
       
    </div>
  );
}

export default Delete;

import React from "react";
import List, { ListItem } from "../List";
import api from '../../utils/Api';

function Book({ title, authors, description, image, link }) {
  // function saveBook (event) {
  //   api.postBookDB(userdata)
  //   return new ListItem;
  // }

  return (
    <div>
      <ListItem>
        <div class="card">
          <img
            src={image}
            class="card-img-top"
            alt="..."
            style={{ width: "20%" }}
          ></img>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{authors}</p>
            <p class="card-text">{description}</p>
            <a  href="#" class="btn btn-primary" style={{color: "white"}}>
              Save
            </a>
          </div>
        </div>
      </ListItem>
    </div>
  );
}

export default Book;

/* <h1>{title}</h1>
<h2>{authors}</h2>
<h2>{description}</h2>
<h2>{image}</h2>
<h2>{link}</h2> */

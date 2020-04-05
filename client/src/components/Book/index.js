import React from "react";
import { List, ListItem } from "../List";

function Book(props) {
  return (
    <div>
      <ListItem>
        <div class="card">
          <img
            src={props.image}
            class="card-img-top"
            alt="..."
            style={{ width: "20%" }}
          ></img>
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.authors}</p>
            <p class="card-text">{props.description}</p>
            <a
              onClick={() => {
                props.handleOnClick({
                  title: props.title,
                  author: props.authors.join(' '),
                  description: props.description,
                  picture: props.image,
                  hyperLink: props.link
                });
              }}
              href="#"
              class="btn btn-primary"
              style={{ color: "white" }}
            >
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

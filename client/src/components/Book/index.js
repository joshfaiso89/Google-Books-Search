import React from "react";
import { ListItem } from "../List";
import { Link } from 'react-router-dom';

function Book(props) {
  return (
    <div>
      <ListItem>
        <div className="card">
          <img
            src={props.image}
            className="card-img-top"
            alt="..."
            style={{ width: "20%" }}
          ></img>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.authors}</p>
            <p className="card-text">{props.description}</p>
            <Link
              onClick={() => {


              props.handleOnClick !=null ?
            (
              props.handleOnClick({
                title: props.title,
                author: props.authors.join(' '),
                description: props.description,
                picture: props.image,
                hyperLink: props.link
              })
            ):
                (
                  props.handleDelete(props.id)

                ) 
                }} 
              className="btn btn-primary"
              style={{ color: "white" }}
            >
               {props.handleOnClick !=null ?"Saved" : "Delete"} 
            </Link>
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

import React from 'react';
import { ListItem } from '../List';

function Book ({ title, authors, description, image, link }) {
    return(
        <div>
            <ListItem>
            <div class="card">
    <img src={image} class="card-img-top" alt="..." style={{width:"20%"}}></img>
    <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{authors}}</p>
        <p class="card-text">{description}</p>
        <a href={link} class="btn btn-primary">View</a>
        <a href="#" class="btn btn-primary">Save</a> 
    </div>
            </div>
            </ListItem>
        </div>
    )
}

export default Book;

{/* <h1>{title}</h1>
<h2>{authors}</h2>
<h2>{description}</h2>
<h2>{image}</h2>
<h2>{link}</h2> */}
import React from 'react';
import {ListItem} from '../List';

function Book ({ title, authors, description, image, link }) {
    return(
        <div>
            <ListItem>
            <h1>{title}</h1>
            <h2>{authors}</h2>
            <h2>{description}</h2>
            <h2>{image}</h2>
            <h2>{link}</h2>
            </ListItem>
        </div>
    )
}

export default Book;
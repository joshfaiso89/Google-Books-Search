// api-key = AIzaSyBEgCZbOXjw7LnD1dvg9FhB-zP-SHTPeFU
import axios from "axios";
import { Query } from "mongoose";

export default {
    getBook: (title) => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
    }
}


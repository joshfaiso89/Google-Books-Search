// api-key = AIzaSyBEgCZbOXjw7LnD1dvg9FhB-zP-SHTPeFU
import axios from "axios";

export default {
    getBook: (title) => {
        return axios.get("/api/googlebooks/" + title);
    },

    getBookDB: () => {
        return axios.get("/api/savedbooks");
    },

    postBookDB: (userData) => {
        return axios.post("/api/books", userData);
    },
    deleteBookDB: (id) => {
        return axios.delete("/api/books/" + id)
    }

}


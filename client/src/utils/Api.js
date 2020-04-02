// api-key = AIzaSyBEgCZbOXjw7LnD1dvg9FhB-zP-SHTPeFU
import axios from "axios";

export default {
    getBook: () => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q={search term}")
    }

}


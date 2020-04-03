// api-key = AIzaSyBEgCZbOXjw7LnD1dvg9FhB-zP-SHTPeFU
import axios from "axios";

export default {
    getBook: (title) => {
        return axios.get("/api/googlebooks/" + title);
    }
}


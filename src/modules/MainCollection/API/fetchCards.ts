import axios from "axios";

export async function fetchCards() {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/card/model/mini/favorite`);
    return response
}
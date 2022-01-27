import axios from "axios";

const url = "http://localhost:5000/carousel";

export const getItems = () => axios.get(url);
export const createItem = (carousel) => axios.post(url, carousel);

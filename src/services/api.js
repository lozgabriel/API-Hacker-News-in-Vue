import axios from "axios";

const api = axios.create({
    baseURL:'https://hacker-news.firebaseio.com/v0/'
})

const apiId = axios.create({
    baseURL:'https://hacker-news.firebaseio.com/v0/item/'
})

export { api, apiId};
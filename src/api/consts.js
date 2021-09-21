import axios from 'axios'

export const client = (url) => axios.create({baseURL:url})

export const apod_url = "https://api.nasa.gov/planetary/apod?"

export const api_key= "8eFnpxvyYihhlWtwLf1ZiXokiSmmRzzMdb31kxyk"


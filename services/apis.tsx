import axios, { Axios } from "axios";
import {  } from "react";
let url: string = "https://api.jsonbin.io/v3/b/62ea5f481c7f436f211de6ef"

export const get_coins = async () => {
    return await axios.get(url);
}

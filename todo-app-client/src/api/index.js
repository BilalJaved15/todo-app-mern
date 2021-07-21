import axios from "axios";
require('dotenv').config();

export const GET_ITEM = () =>
    axios({
        method: "GET",
        url: ("http://127.0.0.1:5000/get-items"),
    });

export const ADD_ITEM = (utitle) =>
    axios({
        method: "POST",
        url: ("http://127.0.0.1:5000/add-item"),
        data: {
            title: utitle
        }
    });
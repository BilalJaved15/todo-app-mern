import axios from "axios";

export const GET_ITEM = () =>
    axios({
        method: "GET",
        url: (process.env.REACT_APP_TODO_SERVER_URL + "/get-items"),
    });

export const ADD_ITEM = (utitle) =>
    axios({
        method: "POST",
        url: (process.env.REACT_APP_TODO_SERVER_URL + "/add-item"),
        data: {
            title: utitle
        }
    });

export const DELETE_ITEM = (uid) =>
    axios({
        method: "DELETE",
        url: (process.env.REACT_APP_TODO_SERVER_URL + "/delete-item"),
        data: {
            id: uid
        }
    })
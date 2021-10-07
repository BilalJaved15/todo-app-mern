import axios from "axios";

const api_secret = "YBL4Mcr7aT7EPlOoCApAL2v3Tb3XrcvPUvDIycJ0Sz5oxZ82d7";

export const GET_ITEM = () =>
  axios({
    method: "GET",
    url: process.env.REACT_APP_TODO_SERVER_URL + "/get-items",
  });

export const ADD_ITEM = (utitle) =>
  axios({
    method: "POST",
    url: process.env.REACT_APP_TODO_SERVER_URL + "/add-item",
    data: {
      api_secret: api_secret,
      title: utitle,
    },
  });

export const DELETE_ITEM = (uid) =>
  axios({
    method: "DELETE",
    url: process.env.REACT_APP_TODO_SERVER_URL + "/delete-item",
    data: {
      api_secret: api_secret,
      id: uid,
    },
  });

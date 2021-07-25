import React from "react";
import "./style.css";
import { GET_ITEM, DELETE_ITEM } from "../../api/index.js";
import { useState, useEffect } from "react";

function Home() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        GET_ITEM()
            .then((res) => {
                if (res.data.success === 1) {
                    setItems(res.data.data);
                } else throw Error();
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const removeItem = (id) => {
        setItems(items.filter((item) => {
            console.log(item._id, id, item._id === id)
            return !(item._id === id);
        }));
        DELETE_ITEM(id).then((res) => {
            if (res.data.success === 1) {
                console.log("DELETED!")
            } else throw Error()
        }).catch((err) => console.log(err))
        console.log(items)
    };

    return ( <
        div className = "list__container" >
        <
        h4 > Your Current List: < /h4> <
        ul > {
            items.length > 0 ?
            items.map((item) => {
                return ( <
                    li key = { item._id } >
                    <
                    span > { item.title } { " " } <
                    i className = "bi bi-trash del-icon"
                    onClick = {
                        () => removeItem(item._id) }
                    /> <
                    /span> <
                    /li>
                );
            }) : < li > List is Empty! < /li>} <
                /ul> <
                /div>
        );
    }

    export default Home;
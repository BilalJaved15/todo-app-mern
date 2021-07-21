import mongoose from "mongoose"
import Item from "./items.schema.js";

const itemsModel = {
    createItem: (async(userTitle) => {
        const item = new Item({
            title: userTitle
        })
        const returnData = {};
        try {
            let temp = await item.save();
            returnData.success = 1
            returnData.data = temp
        } catch (e) {
            console.log(e)
            returnData.success = 0
            returnData.data = e
        } finally {
            return returnData;

        }
    }),
    getItems: (async() => {
        const returnData = {};
        try {
            let temp = await Item.find()
            returnData.success = 1
            returnData.data = temp
        } catch (e) {
            console.log(e)
            returnData.success = 0
            returnData.data = e
        } finally {
            return returnData;

        }
    })
}

export default itemsModel
const mongoose = require("mongoose");
const Item = require("./item.schema.js");

const itemModel = {
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
    }),
    deleteItem: (async(id) => {
        const returnData = {};
        try {
            let temp = await Item.findByIdAndDelete(id);
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

module.exports = itemModel
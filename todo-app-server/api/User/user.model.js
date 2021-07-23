import mongoose from "mongoose";
import User from "./user.schema.js";

export const userModel = {
    createUser: (async(uname, uemail, upassword) => {
        const user = new User({
            name: uname,
            email: uemail,
            password: upassword
        })
        const returnData = {};
        try {
            let temp = await user.save();
            returnData.success = 1;
            returnData.data = temp;
        } catch (e) {
            console.log(e)
            returnData.success = 0
            returnData.data = e
        } finally {
            return returnData;
        }
    })
}
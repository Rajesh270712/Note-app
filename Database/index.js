const mongoose = require("mongoose")


const databaseConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/noteApp")
        console.log("connect");
    } catch (error) {
        console.log(error)
        throw error
    }
}


module.exports = databaseConnect;
const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("DB connected Succssfully")
    }
    catch (err) {
        console.log("Database didnot connect due to : ", err)

    }



}
module.exports = connectDB
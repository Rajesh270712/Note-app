const mongoose = require("mongoose");


const noteSchema = mongoose.Schema({
    title:String,
    note:String,
    label:String,
    user: {  
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Note = mongoose.model("Note",noteSchema)


module.exports = Note;
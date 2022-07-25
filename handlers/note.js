const Note = require("../Database/note");


const createNote =async (req,res) => {
    const {note} =req.body;
    const { user } = req.context
    console.log(user);
    // note.user = user._id;

    noteDoc = await Note.create(note);

    return res.send({
        data: noteDoc
    })
}


module.exports = createNote


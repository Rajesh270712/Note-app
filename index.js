const express =  require("express");
const cors = require("cors");
const databaseConnect = require("./Database");
const userRouter = require("./Routers/user");
const noteRouter = require("./Routers/note");


const app = express();

app.use(cors());
app.use(express.json())

function logger (req,res,next) {
    console.log(req.path, new Date());
    next()
}

function setRequest(req, res, next) {
    req.context = {} 
    next();
}

app.use(logger)
app.use(setRequest)
app.use(userRouter)
app.use(noteRouter)

databaseConnect().then(()=>{
    app.listen(3000)
    console.log(" database connected");
})


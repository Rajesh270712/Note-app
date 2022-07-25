const express = require("express")
const { register, login } = require("../handlers/users")

const userRouter = express.Router();


userRouter.post("/users/register",register)
userRouter.post("/user/login" , login)

module.exports = userRouter;
const User = require("../Database/user");
const jsonwebtoken = require("jsonwebtoken")
const SECRET = require("../constrants/secret")


async function register(req, res) {
    const { user } = req.body; 
    console.log(user);
    const isExist = await User.findOne({
        email: user.email
    })

    
    if (isExist) {
        return res.status(400).send({
            error: "User already exists"
        })
    }

    let userInfo = await User.create(user);

    return res.send({
        data: userInfo,
    })
}


async function login(req, res) {
    let { email, password } = req.body

    let user = await User.findOne({
        email: email
    })

    if (user) {
        if (user.password === password) {
            
            let encryptedToken = jsonwebtoken.sign({
                id: user._id,
                email: user.email,
                name: user.name
            }, SECRET)

            return res.send({
                data: {
                    token: encryptedToken
                }
            })
        } else {
            return res.send({
                error: "Password does not match."
            })
        }
    } else {
        return res.status(404).send({
            error: "User is not found"
        })
    }
}


module.exports = {
    register,
    login
}
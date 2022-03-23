const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = process.env.ACCES_TOKEN_SECRET || 'my secret'

function generateJWT(data){
    const token = jwt.sign(data, secret, {expiresIn: "100000000000000000000000s"})
    return token
}

exports.generateJWT = generateJWT

async function authenticateUser(req, res, next) {
    let bearerAndToken = req.headers.authorization
    let decodedToken
    if(bearerAndToken){
        try{
            let token = bearerAndToken.split(' ')[1]
            decodedToken = jwt.verify(token, secret)
            try{
                const match = await bcrypt.compare(req.body.password, decodedToken.password)
                if(!match) return res.status(400).send({error: "Invalid passcode!"})

                else{
                    req.authenticated = true //ask brennan what req.authenticated is again
                    next()
                }
            }
            catch(error){
                console.error(error)
            }
        }
        catch(error){
            console.error(error)
            res.send({error: "Invalid token sent to server!"})
            return
        }
    }
    else{
        res.send({error: "No token sent to server!"})
        return
    }
}

exports.authenticateUser = authenticateUser
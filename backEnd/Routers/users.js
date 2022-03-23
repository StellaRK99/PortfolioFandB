const mysqlDatabase = require('../mySQLDatabase')
const bcrypt = require('bcrypt')
const express = require('express')
const jwt = require('../jwt')
const router = express.Router()

router.use(express.static('public'))
router.use(express.json())
router.use(express.urlencoded()) 

router.post("/", async (req,res) => {
    const data = req.body
    if(data){
        try{
            const encrypted = await bcrypt.hash(data.password, 12)
            data.password = encrypted
            const user = await mysqlDatabase.createUser(data)
            const webToken = jwt.generateJWT(data)
            res.send(webToken)
        }
        catch(error){
            console.error(error)
            res.sendStatus(500)
        }
    }
    else{
        res.sendStatus(401).send({error: "No body found"})
    }
})

router.post("/login", jwt.authenticateUser, async (req, res) => {
    if(req.authenticated){
        res.send("Login Successful!")
    }
})



module.exports = router
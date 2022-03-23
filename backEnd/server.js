const mysqlDatabase = require('./mySQLDatabase')
const express = require('express')
const jwt = require('./jwt')
const usersRoutes = require('./Routers/users')
const res = require('express/lib/response')
const app = express()


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use("/users", usersRoutes)
app.use(express.static("build"))
// ///////////////////////////////GET//////////////////////////////
// app.get("/paintings", async(req, res) => {
//     try{
//         const allPaintings = await (mysqlDatabase.getAllPaintings())
//         res.send(allPaintings).status(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })


// app.get("/dishes", async(req, res) => {
//     try{
//         const allDishes = await (mysqlDatabase.getAllDishes())
//         res.send(allDishes).status(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })

// app.get("/animals", async (req, res) =>{
//     try{
//         const allAnimals = await (mysqlDatabase.getAllAnimals())
//         res.send(allAnimals).status(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })
// //////////////////////////POST////////////////////////////////////////////////////
// app.post("/paintings", jwt.authenticateUser, async (req, res) => {
//     const painting = req.body
//     try{
//         const data = await (mysqlDatabase.addPainting(painting))
//         res.sendStatus(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })

// app.post("/dishes", jwt.authenticateUser, async (req, res) => {
//     const dish = req.body
//     try{
//         const data = await (mysqlDatabase.addDish(dish))
//         res.sendStatus(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })

// app.post("/animals", jwt.authenticateUser, async (req, res) =>{
//     const animal = req.body
//     try{
//         const data = await (mysqlDatabase.addAnimal(animal))
//         res.sendStatus(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })
// ////////////////////////////////PATCH//////////////////////////////////////////////////////
// app.patch("/paintings/:id", jwt.authenticateUser, async (req, res) => {
//     const id = req.params.id
//     const painting = req.body 
//     try{
//         const data = await (mysqlDatabase.patchPainting(id, painting))
//         res.sendStatus(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })

// app.patch("/dishes/:id", jwt.authenticateUser, async (req, res) => {
//     const id = req.params.id
//     const dish = req.body
//     try{
//         const data = await (mysqlDatabase.patchDish(id, dish))
//         res.sendStatus(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })

// app.patch("/animals/:id", jwt.authenticateUser, async (req, res) => {
//     const id = req.params.id
//     const animal = req.body
//     try{
//         const data = await (mysqlDatabase.patchAnimal(id, animal))
//         res.sendStatus(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })
// /////////////////////////////DELETE/////////////////////////////////////////////
// app.delete("/paintings/:id", jwt.authenticateUser, async (req, res) =>{
//     const id = req.params.id
//     try{
//         await (mysqlDatabase.deletePainting(id))
//         res.sendStatus(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })

// app.delete("/dishes/:id", jwt.authenticateUser, async (req, res) =>{
//     const id = req.params.id
//     try{
//         await (mysqlDatabase.deleteDish(id))
//         res.sendStatus(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })

// app.delete("/animals/:id", jwt.authenticateUser, async (req, res) =>{
//     const id = req.params.id
//     try{
//         await (mysqlDatabase.deleteAnimal(id))
//         res.sendStatus(200)
//     }
//     catch(error){
//         console.error(error)
//         res.sendStatus(500)
//     }
// })



//auth doesnt work!
//ask brennan what req.authenticated is in the jwt.js file
//how to actually connect to react and show data from database on pages 


//must be authenticated to add, delete or edit  a resource, but you can view without being logged in
//make a secret login portal (maybe a secret button? Like a tiny button with a pic lock icon on it or something that doesn't look like a button)

app.get('*', (req, res) => {
    res.sendFile('build/index.html');
  });
const port = process.env.PORT || 8080

app.listen(port, console.log(`Server started on port ${port}`));

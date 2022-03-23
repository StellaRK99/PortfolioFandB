const mysql = require("mysql2")

const pool = mysql
  .createPool({
    host: "localhost",
    user: "antas_me",
    password: "MyPassword1!",
    database: "my_hobbies",
  })
  .promise()
///////////////////////GET////////////////////////////////////////
async function getAllPaintings(){
    let query = `SELECT * FROM paintings`
    const [rows] = await pool.query(query)
    return rows
}
exports.getAllPaintings = getAllPaintings

async function getAllDishes(){
  let query = `SELECT * FROM cooking`
  const [rows] = await pool.query(query)
  return rows
}
exports.getAllDishes = getAllDishes

async function getAllAnimals(){
  let query = `SELECT * FROM  animals`
  const [rows] = await pool.query(query)
  return rows
}
exports.getAllAnimals = getAllAnimals

///////////////////////POST///////////////////////////////////////////////////////
async function addPainting(data){
  let query = `INSERT INTO painting (title, description) VALUES (?, ?)`
  await pool.query(query, [data.title, data.description])
}
exports.addPainting = addPainting

async function addDish(data){
  let query = `INSERT INTO cooking (dish, description) VALUES (?, ?)`
  await pool.query(query, [data.dish, data.description])
}
exports.addDish = addDish

async function addAnimal(data){
  let query = `INSERT INTO animals (type, reason) VALUES (?, ?)`
  await pool.query(query, [data.type, data.reason])
}
exports.addAnimal = addAnimal

///////////////////////PATCH/////////////////////////////////////////////
async function patchPainting(id, data){
  let query = `UPDATE paintins SET title = ?, description = ? WHERE id = ?`
  await pool.query(query[data.title, data.description, id])
}
exports.patchPainting = patchPainting

async function patchDish(id, data){
  let query = `UPDATE cooking SET dish = ?, description = ? WHERE id = ?`
  await pool.query(query, [data.dish, data.description, id])
}
exports.patchDish = patchDish

async function patchAnimal(id, data){
  let query = `UPDATE animals SET type = ?, reason = ?  WHERE id = ?`
  await pool.query(query, [data.type, data.reason, id])
}
exports.patchAnimal = patchAnimal 

///////////////////////DELETE/////////////////////////////////////////////
async function deletePainting(id){
  let query = `DELETE FROM paintings WHERE id = ?`
  await pool.query(query, [id])
  return
}
exports.deletePainting = deletePainting

async function deleteDish(id){
  let query = `DELETE FROM cooking WHERE id = ?`
  await pool.query(query, [id])
  return
}
exports.deleteDish = deleteDish

async function deleteAnimal(id){
  let query = `DELETE FROM animals WHERE id = ?`
  await pool.query(query, [id])
  return
}

exports.deleteAnimal = deleteAnimal
///////////////////////POST USER/////////////////////////////////////////////
async function createUser(data){
  let query =  `INSERT INTO users(username, password) VALUES (?, ?)`
  const [rows] = await pool.query(query, [data.username, data.password])
  return rows
}
exports.createUser = createUser

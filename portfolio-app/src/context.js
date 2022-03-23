export const getAllPaintings = async () => {
    try{
       const res = await fetch(`http://localhost:3000/paintings`)
       const paintingsData = await res.json()
       return paintingsData 
    }
    catch(error){
        console.error(error)
    }
}

export default getAllPaintings
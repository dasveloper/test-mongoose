
import dbConnect from './dbConnect'
import Pet from '../models/Pet'
export const fetchPets = async () => {
    await dbConnect()

    /* find all the data in our database */
    const result = await Pet.find({})
    const pets = result.map((doc) => {
        const pet = doc.toObject()
        pet._id = pet._id.toString()
        return pet
    })
    return pets;
}

export const fetchFoo = async () => {
 
}
import { connect } from "mongoose"
import { db } from "./constants"

export const dbConfig = async() =>{
    try {
        await connect(db).then(()=>{
            console.log("connected");
        })
    } catch (error) {
     console.error(error)   
    }
}
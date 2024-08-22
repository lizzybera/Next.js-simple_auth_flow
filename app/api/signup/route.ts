import { dbConfig } from "@/utils/dbConfig"
import userModel from "@/utils/model/userModel"
import { NextRequest, NextResponse } from "next/server"
import  bcrypt from "bcrypt"

export const GET = async() =>{
    try {
        dbConfig()
        
        const users = await userModel.find()

        return NextResponse.json({
            message : "users gotten",
            status : 200,
            data : users
        })
    } catch (error) {
        return NextResponse.json({
            message : "Error getting user",
            status : 404,
            data : error
        })
    }
}

export const POST = async(req :NextRequest) =>{
    try {
        dbConfig()
        
        const {name, email, password} = await req.json()

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt)

        const user = await userModel.create({name, email, password : hashed})

        return NextResponse.json({
            message : "user created",
            status : 200,
            data : user
        })
    } catch (error) {
        return NextResponse.json({
            message : "Error creating user",
            status : 404,
            data : error
        })
    }
}
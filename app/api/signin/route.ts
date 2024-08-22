import { dbConfig } from "@/utils/dbConfig"
import userModel from "@/utils/model/userModel"
import { NextRequest, NextResponse } from "next/server"
import  bcrypt from "bcrypt"

export const POST = async(req : NextRequest) =>{
    try {
        dbConfig()

        const {email, password} = await req.json()

        const user = await userModel.findOne({email})

        if(user){
const checked = await bcrypt.compare(password, user?.password)

            if(checked){
                return NextResponse.json({
                    message : `${user?.name} welcome`,
                    status : 201,
                    data : user?.name
                })
            }else{
                return NextResponse.json({
                    message : "Incorrect password",
                    status : 404
                })
            }

        }else{
            return NextResponse.json({
                message : "User Not found",
                status : 404
            })
        }

    } catch (error) {
        return NextResponse.json({
            message : "Error signing in",
            data : error,
            status : 404
        })
    }
}
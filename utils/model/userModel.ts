import { Document, model, models, Schema } from "mongoose";

interface iUser {
    name : string,
    email : string,
    password : string,
}

interface iUserData extends iUser, Document {}

const userSchema = new Schema<iUserData>(
    {
        name : {
            type : String
        },
        email : {
            type : String
        },
        password : {
            type : String
        },
    },
    {timestamps : true}
)

const userModel = models.users || model<iUserData>("users", userSchema)

export default userModel
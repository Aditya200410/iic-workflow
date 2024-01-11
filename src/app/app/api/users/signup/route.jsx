import {connect} from "@/DBconfig/DBconfig";
import User from "@/models/usermodel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect()


export async function POST(request){
    try {
        const reqBody = await request.json()
        const {phonenumber, email, password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            phonenumber,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

        

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
        


    } catch (error) {
        return NextResponse.json("idhar galti hai " ,{error: error.message}, {status: 500})

    }
}

import User from "../../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const postLogin = async (req,res)=>{

    try{

        const {email, password} = req.body;
        const user = await User.findOne({
            email: email.toLowerCase(),
        })
        
        if(user && (await bcrypt.compare(password, user.password))){
            //create jwt token
            const token = jwt.sign(
                {
                    userId: user._id,
                    email: user.email,
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "24h"
                }
            );

            //send res to user 
            return res.status(200).json({
                userDetails:{
                    email: user.email,
                    userId: user._id,
                    username: user.username,
                    token
                },
                msg: "User logged in Succesfully"
            })
        }

        return res.status(400).send("User not found or Unauthorized")

    } catch(err){
        
        return res.status(500).send("Someting went wrong. Please try again") 

    }
}
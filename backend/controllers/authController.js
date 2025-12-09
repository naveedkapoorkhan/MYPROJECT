import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
export const  registeration=async(req,res)=>{

    const {name,email,password}=req.body
   if(!name || !email || !password ) return res.status(400).json({message:"all feilds required"})
    try{
   
    const exist = await userModel.findOne({email})
    if(exist) return res.status(404).json({message:"user already exist"})
            const hashPassword=await bcrypt.hash(password,10)
       const newUser = await userModel.create({name,email,password:hashPassword})
       res.status(200).json({user:newUser,message:"user created successfully"})
    }
    catch(err){
        res.status(500).json({message:"user not created ",error:err})
    }
  
    
    }


export const  login=async(req,res)=>{
    const {email,password}=req.body
     if(!email || !password ) return res.status(400).json({message:"all feilds required"})
    try{
   const exist= await userModel.findOne({email});
   if(!exist) return res.status(400).json({message:"user not found"});
    const match = await bcrypt.compare(password,exist.password);
   if(!match) return res.status(400).json({message:"invalid password"});

    res.status(200).json({message:"login successful"});
    
    }
    catch(err){
        res.status(500).json({message:"login failed",error:err});
    }
    
    
    }

    
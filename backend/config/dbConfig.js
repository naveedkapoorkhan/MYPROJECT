import mongoose from "mongoose"
 export const DbConnection=async()=>{

   await mongoose.connect(process.env.Mongo_Url)
   .then(()=>console.log("DB connected succesfully"))
   .catch((err)=>console.log("database fail to connect",err))

}
//export default DbConnection; 
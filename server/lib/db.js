import mongoose from "mongoose";

//Function to connect to the mongodb database
export const connectDB=async()=>{
    try{
        mongoose.connection.on('connected',()=>{
            console.log('Database connected')
        })
        await mongoose.connect(`${process.env.MONGODB_URI}chat-app2`)
    }catch(error){
        console.log(error)
    }
    
}
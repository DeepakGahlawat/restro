import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "restro"
    }).then(()=>{
        console.log("connected to database succesfully !");
    }).catch(err =>{
        console.log(`some error occured while connecting to database! ${err}`);
    })
};

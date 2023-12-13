import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
         name:{
            type:String,
            required: true,
         },
         diagnosewith:{
            type:String,
            required: true,
         },
         address:{
            type:String,
            required: true,
         },
         bloodGroup:{
            type:String,
            required: true,
         },

         name:{
            type:String,
            enum:["M","F","O"],
            required: true,
         },

         age:{
            types: Number,
            required:true,
         },

         admittedIn:{
              types: mongoose.Schema.Types.ObjectId,
              ref:"Hospital",
              required: true,
         }
},{
    timestamps:true,
});

export const Patient = mongoose.model("Patient", patientSchema)
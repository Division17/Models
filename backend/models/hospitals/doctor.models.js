import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    sallary:{
      type: Number,
      required: true,
      default: 0,
    },

    qualification:{
        type: String,
        required: true,
    },

    experience:{
        type: Number,
        required: true,
        default: 0
    },

    worksInHospital:{
         type: mongoose.Schema.Types.ObjectId,
         ref:"Hospital",
         required: true,
    }
    

},{timestamps:true});

export const Doctor= mongoose.model("Doctor", doctorSchema )
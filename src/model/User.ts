import mongoose , {Schema, SchemaType} from "mongoose";
import { flushAllTraces } from "next/dist/trace";


const userSchema = new Schema({
    name:{
        required:[true, 'Please provide your name'],
        type: Schema.Types.String,
    },
    email:{
        required:[true, 'Please provide your email'],
        type: Schema.Types.String,
        unique: true,
        trim: true,  //removes any extra spaces before or after the string.
    },
    password:{
        required:[true, 'Please provide your password'],
        type: Schema.Types.String
    },
    mobile:{
        required: [true, 'Please provide your mobile'],
        type: Schema.Types.String,
        trim:true,
    },
    avatar:{
        required: false,
        type: Schema.Types.String,
    },
    role:{
        required:false,
        type: Schema.Types.String,
        default: "User",
    },
    Credentials:{
        required:false,
        type: Schema.Types.String,
        default: "Credentials*****",
    }

});

export const User = mongoose.models.User || mongoose.model("User",userSchema);


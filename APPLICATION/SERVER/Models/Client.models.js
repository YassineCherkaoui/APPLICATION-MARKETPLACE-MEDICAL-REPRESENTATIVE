const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Client = new Schema(
    {
        FirstName : {
            type : String,
            required : true,
            trim : true,
        },
        LastName : {
            type : String,
            required : true,
            trim : true,
        },
        Email : {
            type : String,
            required : true,
            trim : true,
        },
        login : {
            type : String,
            required : true,
            trim : true,
        },
        Password : {
            type : String,
            required : true,
            trim : true,
        },
        status : {
            type : String,
            required : true,
            trim : true,
        },
        role : {
            type : String,
            required : true,
            trim : true,
        },
        Verified : {
            type : Boolean,
            required : true,
            trim : true,
        }
    }
);
const ClientList = mongoose.model("Client", Client);
module.exports = ClientList;
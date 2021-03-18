const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Porduct = new Schema(
    {
        ProductNmae : {
            type : String,
            required : true,
            trim : true,
        },
        Price : {
            type : String,
            required : true,
            trim : true,
        },
        Qty : {
            type : String,
            required : true,
            trim : true,
        },
        idSeller : {
            type : String,
            required : true,
            trim : true,
        }
    }
);

const productList = mongoose.model("Product",Porduct);
module.exports = productList;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExchangeProduct = new Schema(
    {
        Titel : {
            type : String,
            required : true,
            trim : true,
        },
        productImg : {
            type : String,
            required : true,
            trim : true,
        },
        category : {
            type: String,
            required : true,
            trim : true,
        },
        price : {
            type : String,
            required : true,
            trim : true,
        },
        LastPrice : {
            type : String,
            required : true,
            trim : true,
        },
        discription : {
            type : String,
            required : true,
            trim : true,
        },
        idSeller : {
            type : String,
            required : true,
            trim : true,
        },
        currentDate : {
            type : String,
            required : true,
            trim : true,
        },
        stopTime : {
            type : String,
            required : true,
            trim : true,
        },
        datestope : {
            type : String,
            required : true,
            trim : true,
        },
        idBid : {
            type : String,
            required : true,
            trim : true,
        }
    }
);
const ExchangeProductList = mongoose.model("ExchangeProduct", ExchangeProduct);
module.exports = ExchangeProductList;
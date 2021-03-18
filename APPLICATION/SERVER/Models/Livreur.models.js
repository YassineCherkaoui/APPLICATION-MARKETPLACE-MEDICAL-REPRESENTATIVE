const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Delivery = new Schema({
        idLiv: {
            type: String,
            required: true,
            trim: true,
        },
        LivName: {
            type: String,
            required: true,
            trim: true,
        }
    }

);

const deliveryList = mongoose.model("Delivery", Delivery);
module.exports = deliveryList;
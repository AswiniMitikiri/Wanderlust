const mongoose = require("mongoose");       //require mongoose
const Schema = mongoose.Schema;            //require Schema
 
const listingSchema = new Schema({           //created Listing Schema for the DB
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://static.wanderon.in/wp-content/uploads/2023/10/gondola-ride-in-autumn-in-kashmir-2023-10-18t174214.790-min.png",
        set: (v) => v === "" ? "https://static.wanderon.in/wp-content/uploads/2023/10/gondola-ride-in-autumn-in-kashmir-2023-10-18t174214.790-min.png"  : v, 
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

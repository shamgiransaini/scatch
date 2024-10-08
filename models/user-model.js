const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLenght: 3,
        trim: true
    },
    email: String,
    password: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
    isadmin: {
        type:Boolean,
        default: false
    },
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
    date: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model("user", userSchema)
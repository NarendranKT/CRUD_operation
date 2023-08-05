const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required : true
    },
    description: {
        type: String, 
    },
    Linkedin: {
        type: String, 
        required: true
    },
    phoneNumber: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
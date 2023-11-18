const mongoose = require("mongoose");
const CONNECTION = process.env.CONNECTION;
// mQE4x0ySEiWQ7G4x
module.exports = mongoose.connect('mongodb+srv://company:""@cluster0.va2rf2f.mongodb.net/companyDetails?retryWrites=true&w=majority')
    .then(() => console.log("DB connected"))
    .catch((err)=> console.log(err.message));

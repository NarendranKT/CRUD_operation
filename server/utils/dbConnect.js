const mongoose = require("mongoose");
const CONNECTION = process.env.CONNECTION;
// mQE4x0ySEiWQ7G4x
// mongodb+srv://narendran008:narendran008@cluster0.va2rf2f.mongodb.net/companyDetails?retryWrites=true&w=majority
module.exports = mongoose.connect('mongodb+srv://company:mQE4x0ySEiWQ7G4x@cluster0.va2rf2f.mongodb.net/companyDetails?retryWrites=true&w=majority')
    .then(() => console.log("DB connected"))
    .catch((err)=> console.log(err.message));

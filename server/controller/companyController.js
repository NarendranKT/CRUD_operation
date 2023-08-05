const Company = require("../model/company");

const AddDetails = async (req, res) => {
    try {
        const { companyName, description,Linkedin,  phoneNumber } = req.body;
        const details = await Company.create({ companyName, description, Linkedin, phoneNumber});
        res.json({
            status: "Success",
            data : details
        })
    } catch (err) {
        console.log(err);
        res.json({
            Error : err
        })        
    }
}

const GetDetails = async (req, res) => {
    try {
        const data = await Company.find();
        
        res.send(data);
    } catch (err) {
        console.log(err);
        res.json({
            Error : err
        }) 
    }
}

const UpdateDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const { companyName, description, Linkedin,phoneNumber } = req.body;

        const update = await Company.findByIdAndUpdate(id, {
            companyName,
            description,
            Linkedin,
            phoneNumber
        }, {
            new: true,
            runValidators: true
        });
        
        res.json({
            status: "Updated",
            data : update
        })

    } catch (error) {
        console.log(error);
        res.json({
            status: "Failed",
            Error: error
        });
    }
}

const Search = async (req, res) => {
    try {
        const id = req.params.id;
        const details = await Company.findById(id);
        res.send(details)
    } catch (error) {
        res.json({
            status: "Failed",
            Error : error
        })
    }
}

const DeleteDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const removed = await Company.findByIdAndDelete(id);
        res.json({
        status: "Deleted",
        data : removed
    })
    } catch (error) {
        res.json({
            status: "Failed",
            Error : error
        })
    }
}

module.exports = {AddDetails, GetDetails, UpdateDetails, Search, DeleteDetails}
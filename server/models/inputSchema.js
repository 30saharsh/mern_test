const mongoose  = require('mongoose');

const inputModel = new mongoose.Schema({
    name:String,
})

const Input = mongoose.model("inpdata" , inputModel);

module.exports = Input;
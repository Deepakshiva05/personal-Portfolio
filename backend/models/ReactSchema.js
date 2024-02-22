const mongoose = require('mongoose');

const ReactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
  

});

const UserInfo = mongoose.model('UserInfo', ReactSchema);


module.exports = UserInfo;
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: true
    },
},
    {
        timestamps: true
    }
);
 
const User = mongoose.model('users', userSchema);

module.exports = User;
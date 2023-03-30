const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        username:{type: String, unique: true, required: true},
        email: {type: String, unique: true, required: true},
        isAdmin: {type: Boolean, default: false}
    },
    {timestam: true}
    )

    module.exports = mongoose.model('User', UserSchema);
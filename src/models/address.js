const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 48
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true
    },
    pinCode: {
        type: String,
        required: true,
        trim: true
    },
    locality: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100
    },
    address: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100
    },
    cityDistrictTown: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    alternatePhone: {
        type: String
    },
    addressType: {
        type: String,
        required: true,
        enum: ['home','work'],
        required: true
    },
    landmark: {
        type: String,
        min: 10,
        max: 100,
    }
});
 const userAddressSchema = new mongoose.Schema({
     user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User'
     },
     address: [addressSchema]
 }, {timestamps: true });
 module.exports = mongoose.model('UserAddress', userAddressSchema);
 
const  mongoose =  require('mongoose');

const VendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: String
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    modified_by: {
        type: String
    }
});

const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;

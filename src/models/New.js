const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const NewSchema = new mongoose.Schema({
    newNotice: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

NewSchema.plugin(mongoosePaginate);

mongoose.model('New', NewSchema);
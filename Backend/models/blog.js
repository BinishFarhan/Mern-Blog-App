const mongoose = require('mongoose')
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
})

const Blog = mongoose.model('Blog' , blogSchema)
module.exports = Blog
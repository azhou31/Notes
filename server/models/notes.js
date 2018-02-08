let mongoose = require('mongoose');
let NoteSchema = mongoose.Schema({
    content:String
})

mongoose.model('Note',NoteSchema)
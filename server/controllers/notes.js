var mongoose=require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    index:(req,res)=>{
        console.log("hit index");
        Note.find().exec((err,foundNotes)=>{
            if(err){
                console.log("something went wrong");
                res.json(err);
            }else{
                console.log("found notes");
                res.json(foundNotes);
            }
        })
    },
    create:(req,res)=>{
        console.log("create new note  ");
        var newNote = new Note(req.body);
        newNote.save((err)=>{
            if(err){
                res.json(err);
            }else{
                res.json(newNote);
            }
        })
    }
}
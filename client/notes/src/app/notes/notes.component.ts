import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  newNote: object = {content:""}
  notes: any[];
  shownNotes: any[];
  searchString: string="";
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getAllNotes();
}

  onSubmit(){
    console.log("Yay! New note submitted");
    this._apiService.addNote(this.newNote)
    .then((data)=>{
      console.log("then",data);
      this.getAllNotes();
    })
    .catch((error)=>{
      console.log("catch",error);
    })
  }
  getAllNotes(){
    this._apiService.getNotes()
    .then((data)=>{
      console.log("then");
      this.notes = data;
      this.shownNotes = data;
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  searchNotes(){
    this.shownNotes = this.notes.filter((notes)=>{
      console.log(notes.content.includes(this.searchString));
      return notes.content.toLowerCase().includes(this.searchString);
    })
  }
}

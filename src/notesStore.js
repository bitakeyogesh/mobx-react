import { makeAutoObservable } from 'mobx';
import {nanoid} from 'nanoid'

export default class Notes {
    notes  = [];

    constructor(){
        makeAutoObservable(this);
    }

    addNote(text){
        this.notes.push({
            id:nanoid,
            text
        });
    }

    removeNote(id){
        this.notes = this.notes.filter((note)=>note.id !== id)
    }
}

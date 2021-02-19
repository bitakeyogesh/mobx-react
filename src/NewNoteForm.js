import { useState } from "react"
import {useNotesStore} from './NotesContext';

export const NewNoteForm = ()=>{
    const store = useNotesStore();
    const [noteText, setNoteText] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        store.addNote(noteText)
        setNoteText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input  type="text" value={noteText} onChange={(e)=>setNoteText(e.target.value)}></input>
            <button type="submit">Add Note</button>
        </form>
    )
}
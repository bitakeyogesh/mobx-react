import { useState } from "react"
import {useNotesStore} from './NotesContext';

export const NewNoteForm = ()=>{
    const store = useNotesStore();
    const [noteText, setNoteText] = useState("");
    return (
        <>
            <input  type="text" value={noteText} onChange={(e)=>setNoteText(e.target.value)}></input>
            <button onClick={()=>store.addNote(noteText)}>Add Note</button>
        </>
    )
}
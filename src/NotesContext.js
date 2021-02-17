import { createContext, useContext } from "react";
import Notes from './notesStore'


const NotesContext = createContext();

export const NotesContextComponent = ({children})=>{
    return <NotesContext.Provider value={new Notes()}>
        {children}
    </NotesContext.Provider>
}
export const useNotesStore = ()=> useContext(NotesContext);
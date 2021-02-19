import './App.css';
import {useNotesStore} from './NotesContext';
import {NewNoteForm} from './NewNoteForm';
import { observer } from 'mobx-react-lite';


const App = observer((props)=>{
  const store = useNotesStore();
  return (
    <div className="App-header">
      <h1>Add/Remove Task </h1>
      <NewNoteForm/>

      <ul>
          {store.notes.map((note)=>(
            <li onClick={()=> store.removeNote(note.id)} key={note.id}>{note.text}</li>
          )
        )}
      </ul>
    </div>
  )
})



export default App;

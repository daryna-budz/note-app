import { useState } from 'react';
import Header from './components/Header';
import NotesManager from './components/NotesManager';
import NotesList from './components/NotesList';
import FilterPanel from './components/FilterPanel';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  function addNote(note) {
      const newNote = { ...note, id: Date.now() };
      setNotes([...notes, newNote]);
      setFilteredNotes([...notes, newNote]);
  }

  function deleteNote(id) {
      const newNotes = notes.filter(note => note.id !== id);
      setNotes(newNotes);
      setFilteredNotes(newNotes);
  }

  function editNote(id, updatedNote) {
      const newNotes = notes.map(note =>
          note.id === id ? { ...note, ...updatedNote } : note
      );
      setNotes(newNotes);
      setFilteredNotes(newNotes);
  }

  function searchNotes(searchTerm) {
      const result = notes.filter(note =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNotes(result);
  }

  function filterNotes(category) {
      if (category) {
          const result = notes.filter(note => note.category === category);
          setFilteredNotes(result);
      } else {
          setFilteredNotes(notes);
      }
  }

  return (
      <div>
          <Header onAddNote={addNote} onSearch={searchNotes} onFilter={filterNotes} />
          <NotesManager 
              notes={filteredNotes} 
              onDelete={deleteNote} 
              onEdit={editNote} 
          />
      </div>
  );
}

export default App;


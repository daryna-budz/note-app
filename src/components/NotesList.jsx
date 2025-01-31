import NoteCard from './NoteCard';

function NotesList({ notes, onDelete, onEdit }) {
    return (
        <div>
            {notes.map(note => (
                <NoteCard key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
}

export default NotesList;


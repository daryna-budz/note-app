import NotesList from './NotesList';
import NoteForm from './NoteForm';

function NotesManager({ notes, onDelete, onEdit }) {
    return (
        <div>
            <NotesList notes={notes} onDelete={onDelete} onEdit={onEdit} />
        </div>
    );
}

export default NotesManager;

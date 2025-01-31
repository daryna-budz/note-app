function NoteCard({ note, onDelete, onEdit }) {
    return (
        <div className="flex items-center justify-between bg-white mt-7 p-5 py-4 rounded-3xl">
            <h3 className="font-bold"><span className="mr-4">&#128204;</span>{note.title}</h3>
            <p>{note.content}</p>
            <div className="flex gap-7">
              <button className="bg-green-700 text-white font-bold px-6 py-2 rounded-3xl hover:bg-green-900 hover:text-white transition-all duration-500" onClick={() => onEdit(note)}>Edit</button>
              <button className="bg-red-700 text-white font-bold px-6 py-2 rounded-3xl hover:bg-red-900 hover:text-white transition-all duration-500" onClick={() => onDelete(note.id)}>Delete</button>
            </div>
        </div>
    );
}

export default NoteCard;


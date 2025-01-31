import { useState } from 'react';

function NoteForm({ onSubmit, initialNote = {} }) {
    const [title, setTitle] = useState(initialNote.title || '');
    const [content, setContent] = useState(initialNote.content || '');
    const [category, setCategory] = useState(initialNote.category || 'Work');


    function handleSubmit() {
        if (title.trim() && content.trim()) {
            onSubmit({ title, content, category });
            setTitle('');
            setContent('');
            setCategory('Work');
        }
    }


    return (
        <div className="flex gap-5 mt-5 items-center">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <select className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Work">Work</option>
                <option value="Study">Study</option>
                <option value="Personal">Personal</option>
            </select>
            <button className="bg-pink-700 text-white font-bold px-4 py-3 rounded-3xl hover:bg-pink-900 hover:text-white transition-all duration-500" onClick={handleSubmit} > Submit Note</button>
        </div>
    );
}

export default NoteForm;

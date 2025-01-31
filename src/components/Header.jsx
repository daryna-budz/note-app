import { useState } from 'react';
import NoteForm from './NoteForm';

function Header({ onAddNote, onSearch, onFilter }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTerm, setFilterTerm] = useState('');
    const [showForm, setShowForm] = useState(false);

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }

    function handleFilterChange(event) {
        setFilterTerm(event.target.value);
        onFilter(event.target.value);
    }

    return (
        <div>
            <h1 className="text-white font-bold">Note App &#128221;</h1>

            <div className="flex flex-col gap-5 mt-5 items-center">
                {!showForm && (
                    <button
                        className="bg-green-700 text-white font-bold px-4 py-3 rounded-3xl hover:bg-green-900 hover:text-white transition-all duration-500"
                        onClick={() => setShowForm(true)}
                    >
                        + Add Note
                    </button>
                )}

                {showForm && (
                    <NoteForm onSubmit={onAddNote} />
                )}

                <input
                    type="text"
                    className="border-4 border-blue-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    placeholder="&#128269; Search notes..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                <select
                    className="border-4 border-yellow-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    value={filterTerm}
                    onChange={handleFilterChange}
                >
                    <option value="">All notes</option>
                    <option value="Work">Work</option>
                    <option value="Study">Study</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </div>
    );
}

export default Header;




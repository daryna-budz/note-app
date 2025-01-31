function FilterPanel({ onFilter }) {
    return (
        <div>
            <button onClick={() => onFilter('Work')}>Work</button>
            <button onClick={() => onFilter('Study')}>Study</button>
            <button onClick={() => onFilter('Personal')}>Personal</button>
            <button onClick={() => onFilter('')}>All</button>
        </div>
    );
}

export default FilterPanel;


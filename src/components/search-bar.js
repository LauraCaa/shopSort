import React from 'react';

export default function SearchBar({ onSearchChange }) {
    function handleSearchChange(event) {
        onSearchChange(event.target.value);
    }

    return (
        <div className="col-12 col-md-7 main-font">
            <div className="input-group rounded-3 text-secondary">
                <div className="input-group-text bg-secondary-subtle mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search text-secondary" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
                <input type="text" 
                    className="form-control main-font border border-start-0 form-select-lg py-3 text-secondary mt-2 bg-secondary-subtle" 
                    placeholder="Search" 
                    aria-label="search" 
                    aria-describedby="basic-addon1"
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
}

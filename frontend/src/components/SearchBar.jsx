import React from 'react'

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search by Telephone Number..."
                className="form-input" 
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar
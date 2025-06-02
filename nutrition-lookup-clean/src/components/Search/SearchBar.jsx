import React, { useState } from 'react'
import { Search, Loader2 } from 'lucide-react'

function SearchBar({ onSearch, loading, placeholder }) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchTerm.trim() && onSearch) {
            onSearch(searchTerm.trim())
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <div className="card">
            <div className="search-bar">
                <div className="search-input-container">
                    <Search className="search-icon" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={placeholder || "Search for a food (e.g., banana, chicken breast, oatmeal)"}
                        className="search-input"
                        disabled={loading}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={loading || !searchTerm.trim()}
                    className="btn btn-primary btn-lg"
                >
                    {loading ? <Loader2 className="btn-icon loading-spinner" /> : <Search className="btn-icon" />}
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar
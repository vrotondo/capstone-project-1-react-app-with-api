import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Package } from 'lucide-react'

function SearchResults({ results, loading }) {
    if (loading) {
        return (
            <div className="card">
                <div className="loading-placeholder">
                    <div className="loading-title"></div>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="loading-item">
                            <div className="loading-line"></div>
                            <div className="loading-line-short"></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (!results || results.length === 0) {
        return null
    }

    return (
        <div className="card">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem' }}>
                Search Results ({results.length} found)
            </h2>

            <div className="search-results">
                {results.map((food) => (
                    <Link
                        key={food.fdcId}
                        to={`/nutrition/${food.fdcId}`}
                        className="search-result-item"
                    >
                        <div className="search-result-content">
                            <div className="search-result-info">
                                <Package className="search-result-icon" />
                                <div className="search-result-details">
                                    <h3>{food.description}</h3>

                                    {food.brandOwner && (
                                        <p className="search-result-brand">
                                            <span style={{ fontWeight: '500' }}>Brand:</span> {food.brandOwner}
                                        </p>
                                    )}

                                    <div className="search-result-meta">
                                        <span className="search-result-badge">
                                            {food.dataType}
                                        </span>

                                        {food.servingSize && food.servingSizeUnit && (
                                            <span>
                                                Serving: {food.servingSize}{food.servingSizeUnit}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <ChevronRight className="search-result-chevron" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchResults
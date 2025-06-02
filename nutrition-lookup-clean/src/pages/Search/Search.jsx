import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../../components/Search/SearchBar'
import SearchResults from '../../components/Search/SearchResults'
import ErrorMessage from '../../components/UI/ErrorMessage'
import { nutritionApi, NutritionApiError } from '../../services/nutritionApi'
import { useNutrition } from '../../context/NutritionContext'
import { NUTRITION_ACTIONS } from '../../context/NutritionContext'

function Search() {
    const navigate = useNavigate()
    const { searchResults, loading, error, dispatch } = useNutrition()
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = async (searchTerm) => {
        setHasSearched(true)
        dispatch({ type: NUTRITION_ACTIONS.SET_LOADING, payload: true })
        dispatch({ type: NUTRITION_ACTIONS.CLEAR_ERROR })

        try {
            const results = await nutritionApi.searchFoods(searchTerm)

            if (results.length === 0) {
                dispatch({
                    type: NUTRITION_ACTIONS.SET_ERROR,
                    payload: 'No foods found. Try a different search term or check your spelling.'
                })
            } else {
                dispatch({ type: NUTRITION_ACTIONS.SET_SEARCH_RESULTS, payload: results })
            }
        } catch (err) {
            if (err instanceof NutritionApiError) {
                dispatch({ type: NUTRITION_ACTIONS.SET_ERROR, payload: err.message })
            } else {
                dispatch({
                    type: NUTRITION_ACTIONS.SET_ERROR,
                    payload: 'Failed to search foods. Please check your internet connection and try again.'
                })
            }
        } finally {
            dispatch({ type: NUTRITION_ACTIONS.SET_LOADING, payload: false })
        }
    }

    const handleRetry = () => {
        dispatch({ type: NUTRITION_ACTIONS.CLEAR_ERROR })
        setHasSearched(false)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Page Header */}
            <div className="text-center">
                <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
                    Search for Foods
                </h1>
                <p style={{ color: '#6b7280', maxWidth: '42rem', margin: '0 auto' }}>
                    Enter any food name, ingredient, or brand to find detailed nutrition information
                    from the USDA FoodData Central database.
                </p>
            </div>

            {/* Search Bar */}
            <SearchBar
                onSearch={handleSearch}
                loading={loading}
                placeholder="Search for foods (e.g., banana, chicken breast, quinoa, greek yogurt)"
            />

            {/* Error Message */}
            {error && (
                <ErrorMessage
                    error={error}
                    onRetry={handleRetry}
                />
            )}

            {/* Search Results */}
            {(searchResults.length > 0 || loading) && (
                <SearchResults
                    results={searchResults}
                    loading={loading}
                />
            )}

            {/* Welcome Message */}
            {!hasSearched && !loading && searchResults.length === 0 && !error && (
                <div className="card text-center">
                    <div className="max-w-2xl mx-auto">
                        <div style={{
                            backgroundColor: '#dcfce7',
                            width: '5rem',
                            height: '5rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            fontSize: '2.5rem'
                        }}>
                            🔍
                        </div>

                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
                            Ready to Find Nutrition Information?
                        </h2>

                        <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Our database contains thousands of foods with accurate nutritional data from the USDA.
                            Perfect for tracking macros, managing dietary restrictions, or simply learning about the foods you eat.
                        </p>

                        {/* Search Examples */}
                        <div style={{ backgroundColor: '#f9fafb', borderRadius: '0.5rem', padding: '1.5rem' }}>
                            <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                                Try searching for:
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '0.75rem',
                                fontSize: '0.875rem'
                            }}>
                                {[
                                    'Banana', 'Chicken breast', 'Quinoa', 'Greek yogurt',
                                    'Salmon', 'Avocado', 'Brown rice', 'Almonds'
                                ].map((food) => (
                                    <button
                                        key={food}
                                        onClick={() => handleSearch(food)}
                                        style={{
                                            padding: '0.75rem',
                                            backgroundColor: 'white',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '0.375rem',
                                            color: '#374151',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.borderColor = '#bbf7d0'
                                            e.target.style.color = '#16a34a'
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.borderColor = '#e5e7eb'
                                            e.target.style.color = '#374151'
                                        }}
                                    >
                                        {food}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tips */}
                        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
                            <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                                Search Tips:
                            </h3>
                            <ul style={{ fontSize: '0.875rem', color: '#6b7280', listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#16a34a', marginTop: '0.25rem' }}>•</span>
                                    Use specific terms like "raw banana" or "grilled chicken breast"
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#16a34a', marginTop: '0.25rem' }}>•</span>
                                    Include brand names for packaged foods (e.g., "Cheerios cereal")
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#16a34a', marginTop: '0.25rem' }}>•</span>
                                    Try different variations if you don't find what you're looking for
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                    <span style={{ color: '#16a34a', marginTop: '0.25rem' }}>•</span>
                                    All nutrition values are standardized per 100g for easy comparison
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search
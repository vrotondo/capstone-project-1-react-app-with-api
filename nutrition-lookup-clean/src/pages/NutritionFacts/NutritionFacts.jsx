import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import NutritionDisplay from '../../components/Nutrition/NutritionDisplay'
import LoadingSpinner from '../../components/UI/LoadingSpinner'
import ErrorMessage from '../../components/UI/ErrorMessage'
import { nutritionApi, NutritionApiError } from '../../services/nutritionApi'
import { useNutrition } from '../../context/NutritionContext'
import { NUTRITION_ACTIONS } from '../../context/NutritionContext'

function NutritionFacts() {
    const { fdcId } = useParams()
    const navigate = useNavigate()
    const { nutritionData, loading, error, dispatch } = useNutrition()
    const [notification, setNotification] = useState('')

    useEffect(() => {
        const fetchNutritionData = async () => {
            if (!fdcId) {
                navigate('/search')
                return
            }

            dispatch({ type: NUTRITION_ACTIONS.SET_LOADING, payload: true })
            dispatch({ type: NUTRITION_ACTIONS.CLEAR_ERROR })

            try {
                const data = await nutritionApi.getFoodDetails(fdcId)
                dispatch({ type: NUTRITION_ACTIONS.SET_NUTRITION_DATA, payload: data })
                dispatch({ type: NUTRITION_ACTIONS.SET_SELECTED_FOOD, payload: data.description })
            } catch (err) {
                if (err instanceof NutritionApiError) {
                    if (err.status === 404) {
                        dispatch({
                            type: NUTRITION_ACTIONS.SET_ERROR,
                            payload: 'Food not found. It may have been removed from the database.'
                        })
                    } else {
                        dispatch({ type: NUTRITION_ACTIONS.SET_ERROR, payload: err.message })
                    }
                } else {
                    dispatch({
                        type: NUTRITION_ACTIONS.SET_ERROR,
                        payload: 'Failed to load nutrition data. Please check your internet connection and try again.'
                    })
                }
            } finally {
                dispatch({ type: NUTRITION_ACTIONS.SET_LOADING, payload: false })
            }
        }

        fetchNutritionData()
    }, [fdcId, dispatch, navigate])

    const handleCopy = () => {
        setNotification('Nutrition data copied to clipboard!')
        setTimeout(() => setNotification(''), 3000)
    }

    const handleExport = () => {
        setNotification('Nutrition data exported successfully!')
        setTimeout(() => setNotification(''), 3000)
    }

    const handleRetry = () => {
        window.location.reload()
    }

    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link to="/search" className="btn btn-secondary">
                        <ArrowLeft className="btn-icon" />
                        Back to Search
                    </Link>
                </div>
                <LoadingSpinner
                    size="lg"
                    message="Loading nutrition information..."
                    className="loading-page"
                />
            </div>
        )
    }

    if (error) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link to="/search" className="btn btn-secondary">
                        <ArrowLeft className="btn-icon" />
                        Back to Search
                    </Link>
                </div>
                <ErrorMessage
                    error={error}
                    onRetry={handleRetry}
                />
            </div>
        )
    }

    if (!nutritionData) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link to="/search" className="btn btn-secondary">
                        <ArrowLeft className="btn-icon" />
                        Back to Search
                    </Link>
                </div>
                <div className="card text-center">
                    <p style={{ color: '#6b7280' }}>No nutrition data available</p>
                </div>
            </div>
        )
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Navigation Header */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <Link to="/search" className="btn btn-secondary">
                        <ArrowLeft className="btn-icon" />
                        Back to Search
                    </Link>

                    {/* Notification */}
                    {notification && (
                        <div className="notification">
                            <CheckCircle className="notification-icon" />
                            {notification}
                        </div>
                    )}
                </div>
            </div>

            {/* Nutrition Display */}
            <NutritionDisplay
                nutritionData={nutritionData}
                onCopy={handleCopy}
                onExport={handleExport}
            />

            {/* Additional Actions */}
            <div className="card">
                <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                    What's Next?
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <Link to="/search" className="btn btn-primary">
                        Search Another Food
                    </Link>
                    <button
                        onClick={() => window.print()}
                        className="btn btn-secondary"
                    >
                        Print This Page
                    </button>
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: `Nutrition Facts - ${nutritionData.description}`,
                                    text: `Check out the nutrition facts for ${nutritionData.description}`,
                                    url: window.location.href
                                })
                            } else {
                                navigator.clipboard.writeText(window.location.href)
                                setNotification('Page URL copied to clipboard!')
                                setTimeout(() => setNotification(''), 3000)
                            }
                        }}
                        className="btn btn-secondary"
                    >
                        Share
                    </button>
                </div>
            </div>

            {/* Data Source Info */}
            <div style={{
                backgroundColor: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: '0.5rem',
                padding: '1rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                        backgroundColor: '#dbeafe',
                        padding: '0.5rem',
                        borderRadius: '50%',
                        fontSize: '1.125rem'
                    }}>
                        ℹ️
                    </div>
                    <div>
                        <h4 style={{ fontWeight: '600', color: '#1e40af', marginBottom: '0.25rem' }}>
                            Data Source Information
                        </h4>
                        <p style={{ color: '#1d4ed8', fontSize: '0.875rem', lineHeight: '1.6' }}>
                            This nutrition information comes from the USDA FoodData Central database,
                            which provides the most comprehensive and reliable food composition data available.
                            Values shown are per 100g serving unless otherwise specified.
                        </p>
                        <p style={{ color: '#2563eb', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                            <strong>Food ID:</strong> {nutritionData.fdcId} •
                            <strong> Data Type:</strong> {nutritionData.dataType || 'Standard Reference'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NutritionFacts
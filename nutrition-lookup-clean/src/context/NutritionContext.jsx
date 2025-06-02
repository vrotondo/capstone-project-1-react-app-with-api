import React, { createContext, useContext, useReducer } from 'react'

const NutritionContext = createContext()

// Action types
export const NUTRITION_ACTIONS = {
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
    SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
    SET_NUTRITION_DATA: 'SET_NUTRITION_DATA',
    SET_SELECTED_FOOD: 'SET_SELECTED_FOOD',
    CLEAR_ERROR: 'CLEAR_ERROR',
    RESET_SEARCH: 'RESET_SEARCH'
}

// Initial state
const initialState = {
    loading: false,
    error: '',
    searchResults: [],
    nutritionData: null,
    selectedFood: null,
    searchTerm: ''
}

// Reducer function
function nutritionReducer(state, action) {
    switch (action.type) {
        case NUTRITION_ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
                error: action.payload ? '' : state.error
            }

        case NUTRITION_ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case NUTRITION_ACTIONS.SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload,
                loading: false,
                error: ''
            }

        case NUTRITION_ACTIONS.SET_NUTRITION_DATA:
            return {
                ...state,
                nutritionData: action.payload,
                loading: false,
                error: ''
            }

        case NUTRITION_ACTIONS.SET_SELECTED_FOOD:
            return {
                ...state,
                selectedFood: action.payload
            }

        case NUTRITION_ACTIONS.CLEAR_ERROR:
            return {
                ...state,
                error: ''
            }

        case NUTRITION_ACTIONS.RESET_SEARCH:
            return {
                ...initialState
            }

        default:
            return state
    }
}

// Provider component
export function NutritionProvider({ children }) {
    const [state, dispatch] = useReducer(nutritionReducer, initialState)

    const value = {
        ...state,
        dispatch
    }

    return (
        <NutritionContext.Provider value={value}>
            {children}
        </NutritionContext.Provider>
    )
}

// Custom hook to use the nutrition context
export function useNutrition() {
    const context = useContext(NutritionContext)
    if (context === undefined) {
        throw new Error('useNutrition must be used within a NutritionProvider')
    }
    return context
}
import React, { createContext, useContext, useState } from 'react'

const NutritionContext = createContext()

export function NutritionProvider({ children }) {
    const [data, setData] = useState(null)

    return (
        <NutritionContext.Provider value={{ data, setData }}>
            {children}
        </NutritionContext.Provider>
    )
}

export function useNutrition() {
    return useContext(NutritionContext)
}
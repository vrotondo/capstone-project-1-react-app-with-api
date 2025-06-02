const API_KEY = '3atLrP7dE0daTicR5v2Stfi6CSCOh6rlQrYxnlhh'
const BASE_URL = 'https://api.nal.usda.gov/fdc/v1'

class NutritionApiError extends Error {
    constructor(message, status) {
        super(message)
        this.name = 'NutritionApiError'
        this.status = status
    }
}

export const nutritionApi = {
    /**
     * Search for foods in the USDA database
     * @param {string} query - Search term
     * @param {number} pageSize - Number of results to return (default: 20)
     * @returns {Promise<Array>} Array of food objects
     */
    async searchFoods(query, pageSize = 20) {
        if (!query || query.trim().length === 0) {
            throw new NutritionApiError('Search query cannot be empty', 400)
        }

        try {
            const response = await fetch(
                `${BASE_URL}/foods/search?query=${encodeURIComponent(query)}&pageSize=${pageSize}&api_key=${API_KEY}`
            )

            if (!response.ok) {
                throw new NutritionApiError(
                    `Search failed with status ${response.status}`,
                    response.status
                )
            }

            const data = await response.json()

            if (!data.foods || data.foods.length === 0) {
                return []
            }

            return data.foods.map(food => ({
                fdcId: food.fdcId,
                description: food.description,
                brandOwner: food.brandOwner,
                dataType: food.dataType,
                ingredients: food.ingredients,
                servingSize: food.servingSize,
                servingSizeUnit: food.servingSizeUnit
            }))
        } catch (error) {
            if (error instanceof NutritionApiError) {
                throw error
            }
            throw new NutritionApiError('Network error occurred while searching foods', 500)
        }
    },

    /**
     * Get detailed nutrition information for a specific food
     * @param {number} fdcId - Food Data Central ID
     * @returns {Promise<Object>} Detailed nutrition data
     */
    async getFoodDetails(fdcId) {
        if (!fdcId) {
            throw new NutritionApiError('Food ID is required', 400)
        }

        try {
            const response = await fetch(`${BASE_URL}/food/${fdcId}?api_key=${API_KEY}`)

            if (!response.ok) {
                if (response.status === 404) {
                    throw new NutritionApiError('Food not found', 404)
                }
                throw new NutritionApiError(
                    `Failed to get food details with status ${response.status}`,
                    response.status
                )
            }

            const data = await response.json()

            if (!data.foodNutrients) {
                throw new NutritionApiError('No nutrition data available for this food', 404)
            }

            return {
                fdcId: data.fdcId,
                description: data.description,
                brandOwner: data.brandOwner,
                dataType: data.dataType,
                ingredients: data.ingredients,
                servingSize: data.servingSize,
                servingSizeUnit: data.servingSizeUnit,
                foodNutrients: data.foodNutrients.map(nutrient => ({
                    nutrient: {
                        id: nutrient.nutrient.id,
                        number: nutrient.nutrient.number,
                        name: nutrient.nutrient.name,
                        rank: nutrient.nutrient.rank,
                        unitName: nutrient.nutrient.unitName
                    },
                    amount: nutrient.amount || 0
                }))
            }
        } catch (error) {
            if (error instanceof NutritionApiError) {
                throw error
            }
            throw new NutritionApiError('Network error occurred while fetching food details', 500)
        }
    },

    /**
     * Get multiple foods by their IDs
     * @param {Array<number>} fdcIds - Array of Food Data Central IDs
     * @returns {Promise<Array>} Array of detailed nutrition data
     */
    async getMultipleFoods(fdcIds) {
        if (!fdcIds || fdcIds.length === 0) {
            throw new NutritionApiError('At least one food ID is required', 400)
        }

        try {
            const response = await fetch(`${BASE_URL}/foods?api_key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fdcIds)
            })

            if (!response.ok) {
                throw new NutritionApiError(
                    `Failed to get multiple foods with status ${response.status}`,
                    response.status
                )
            }

            const foods = await response.json()
            return foods.map(food => ({
                fdcId: food.fdcId,
                description: food.description,
                foodNutrients: food.foodNutrients || []
            }))
        } catch (error) {
            if (error instanceof NutritionApiError) {
                throw error
            }
            throw new NutritionApiError('Network error occurred while fetching multiple foods', 500)
        }
    }
}

export { NutritionApiError }
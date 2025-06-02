/**
 * Utility functions for nutrition data processing and formatting
 */

/**
 * Key nutrients mapping with display configuration
 */
export const KEY_NUTRIENTS = {
    'Energy': {
        displayName: 'Calories',
        unit: 'kcal',
        color: 'text-orange-600',
        priority: 1
    },
    'Protein': {
        displayName: 'Protein',
        unit: 'g',
        color: 'text-blue-600',
        priority: 2
    },
    'Total lipid (fat)': {
        displayName: 'Fat',
        unit: 'g',
        color: 'text-yellow-600',
        priority: 3
    },
    'Carbohydrate, by difference': {
        displayName: 'Carbs',
        unit: 'g',
        color: 'text-green-600',
        priority: 4
    },
    'Fiber, total dietary': {
        displayName: 'Fiber',
        unit: 'g',
        color: 'text-purple-600',
        priority: 5
    },
    'Sugars, total including NLEA': {
        displayName: 'Sugar',
        unit: 'g',
        color: 'text-pink-600',
        priority: 6
    },
    'Sodium, Na': {
        displayName: 'Sodium',
        unit: 'mg',
        color: 'text-red-600',
        priority: 7
    }
}

/**
 * Extract and format key nutrients from nutrition data
 * @param {Array} nutrients - Array of nutrient objects
 * @returns {Array} Formatted key nutrients
 */
export function getKeyNutrients(nutrients) {
    if (!nutrients || !Array.isArray(nutrients)) {
        return []
    }

    return Object.entries(KEY_NUTRIENTS)
        .map(([nutrientName, config]) => {
            const nutrient = nutrients.find(n => n.nutrient.name === nutrientName)
            return {
                name: config.displayName,
                originalName: nutrientName,
                amount: nutrient?.amount || 0,
                unit: nutrient?.nutrient.unitName || config.unit,
                color: config.color,
                priority: config.priority
            }
        })
        .sort((a, b) => a.priority - b.priority)
}

/**
 * Get all nutrients grouped by category
 * @param {Array} nutrients - Array of nutrient objects
 * @returns {Object} Nutrients grouped by category
 */
export function getNutrientsByCategory(nutrients) {
    if (!nutrients || !Array.isArray(nutrients)) {
        return {}
    }

    const categories = {
        macronutrients: [],
        vitamins: [],
        minerals: [],
        other: []
    }

    nutrients.forEach(nutrient => {
        if (!nutrient.amount || nutrient.amount <= 0) return

        const name = nutrient.nutrient.name.toLowerCase()

        if (isMacronutrient(name)) {
            categories.macronutrients.push(nutrient)
        } else if (isVitamin(name)) {
            categories.vitamins.push(nutrient)
        } else if (isMineral(name)) {
            categories.minerals.push(nutrient)
        } else {
            categories.other.push(nutrient)
        }
    })

    // Sort each category by amount (descending)
    Object.keys(categories).forEach(category => {
        categories[category].sort((a, b) => b.amount - a.amount)
    })

    return categories
}

/**
 * Check if a nutrient is a macronutrient
 * @param {string} name - Nutrient name (lowercase)
 * @returns {boolean}
 */
function isMacronutrient(name) {
    const macroKeywords = [
        'energy', 'protein', 'fat', 'carbohydrate', 'fiber', 'sugar', 'starch'
    ]
    return macroKeywords.some(keyword => name.includes(keyword))
}

/**
 * Check if a nutrient is a vitamin
 * @param {string} name - Nutrient name (lowercase)
 * @returns {boolean}
 */
function isVitamin(name) {
    const vitaminKeywords = [
        'vitamin', 'thiamin', 'riboflavin', 'niacin', 'folate', 'cobalamin',
        'ascorbic', 'retinol', 'tocopherol', 'phylloquinone', 'choline'
    ]
    return vitaminKeywords.some(keyword => name.includes(keyword))
}

/**
 * Check if a nutrient is a mineral
 * @param {string} name - Nutrient name (lowercase)
 * @returns {boolean}
 */
function isMineral(name) {
    const mineralKeywords = [
        'calcium', 'iron', 'magnesium', 'phosphorus', 'potassium', 'sodium',
        'zinc', 'copper', 'manganese', 'selenium', 'fluoride'
    ]
    return mineralKeywords.some(keyword => name.includes(keyword))
}

/**
 * Format nutrition data for export
 * @param {Object} nutritionData - Complete nutrition data object
 * @param {string} foodName - Name of the food
 * @returns {string} Formatted text for export
 */
export function formatNutritionForExport(nutritionData, foodName) {
    if (!nutritionData || !nutritionData.foodNutrients) {
        return 'No nutrition data available'
    }

    const keyNutrients = getKeyNutrients(nutritionData.foodNutrients)

    let text = `NUTRITION FACTS\n`
    text += `${'='.repeat(50)}\n`
    text += `Food: ${nutritionData.description || foodName}\n`
    text += `Serving Size: 100g\n`
    text += `Data Source: USDA FoodData Central\n`
    text += `Export Date: ${new Date().toLocaleDateString()}\n\n`

    text += `KEY NUTRIENTS (per 100g)\n`
    text += `${'-'.repeat(30)}\n`

    keyNutrients.forEach(nutrient => {
        if (nutrient.amount > 0) {
            text += `${nutrient.name.padEnd(15)}: ${nutrient.amount.toFixed(2)}${nutrient.unit}\n`
        }
    })

    text += `\nDETAILED NUTRITION INFORMATION\n`
    text += `${'-'.repeat(40)}\n`

    const categorizedNutrients = getNutrientsByCategory(nutritionData.foodNutrients)

    Object.entries(categorizedNutrients).forEach(([category, nutrients]) => {
        if (nutrients.length > 0) {
            text += `\n${category.toUpperCase()}:\n`
            nutrients.forEach(nutrient => {
                text += `  ${nutrient.nutrient.name}: ${nutrient.amount.toFixed(2)}${nutrient.nutrient.unitName}\n`
            })
        }
    })

    text += `\nDisclaimer: This data is provided by the USDA FoodData Central database.\n`
    text += `Values are approximate and may vary based on preparation methods and sources.\n`

    return text
}

/**
 * Calculate daily value percentage for nutrients
 * @param {string} nutrientName - Name of the nutrient
 * @param {number} amount - Amount of the nutrient
 * @param {string} unit - Unit of measurement
 * @returns {number|null} Daily value percentage or null if not available
 */
export function calculateDailyValue(nutrientName, amount, unit) {
    // Daily Value reference values (based on 2000 calorie diet)
    const dailyValues = {
        'Total lipid (fat)': { amount: 65, unit: 'g' },
        'Sodium, Na': { amount: 2300, unit: 'mg' },
        'Carbohydrate, by difference': { amount: 300, unit: 'g' },
        'Fiber, total dietary': { amount: 25, unit: 'g' },
        'Protein': { amount: 50, unit: 'g' },
        'Vitamin C, total ascorbic acid': { amount: 90, unit: 'mg' },
        'Calcium, Ca': { amount: 1300, unit: 'mg' },
        'Iron, Fe': { amount: 18, unit: 'mg' }
    }

    const dv = dailyValues[nutrientName]
    if (!dv || dv.unit !== unit) {
        return null
    }

    return Math.round((amount / dv.amount) * 100)
}

/**
 * Validate nutrition data structure
 * @param {Object} data - Nutrition data to validate
 * @returns {boolean} True if valid, false otherwise
 */
export function isValidNutritionData(data) {
    return data &&
        typeof data === 'object' &&
        Array.isArray(data.foodNutrients) &&
        data.foodNutrients.length > 0
}

/**
 * Format amount with appropriate decimal places
 * @param {number} amount - Numerical amount
 * @param {string} unit - Unit of measurement
 * @returns {string} Formatted amount
 */
export function formatAmount(amount, unit) {
    if (amount === 0) return '0'

    // For very small amounts, show more decimal places
    if (amount < 1) {
        return amount.toFixed(3)
    }

    // For amounts less than 10, show 2 decimal places
    if (amount < 10) {
        return amount.toFixed(2)
    }

    // For larger amounts, show 1 decimal place
    return amount.toFixed(1)
}
import React from 'react'
import { Copy, Download, Zap, Scale, Utensils } from 'lucide-react'
import { getKeyNutrients, formatNutritionForExport } from '../../utils/nutritionUtils'

function NutritionDisplay({ nutritionData, onCopy, onExport }) {
    if (!nutritionData || !nutritionData.foodNutrients) {
        return (
            <div className="card text-center">
                <p style={{ color: '#6b7280' }}>No nutrition data available</p>
            </div>
        )
    }

    const keyNutrients = getKeyNutrients(nutritionData.foodNutrients)

    const getNutrientIcon = (nutrientName) => {
        if (nutrientName === 'Calories') return <Zap className="nutrition-card-icon" />
        if (nutrientName === 'Protein') return <Scale className="nutrition-card-icon" />
        return <Utensils className="nutrition-card-icon" />
    }

    const handleCopy = () => {
        const nutritionText = formatNutritionForExport(nutritionData, nutritionData.description)
        navigator.clipboard.writeText(nutritionText).then(() => {
            if (onCopy) onCopy()
        })
    }

    const handleExport = () => {
        const nutritionText = formatNutritionForExport(nutritionData, nutritionData.description)
        const blob = new Blob([nutritionText], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${nutritionData.description.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_nutrition.txt`
        a.click()
        URL.revokeObjectURL(url)

        if (onExport) onExport()
    }

    return (
        <div className="card">
            {/* Header */}
            <div className="nutrition-header">
                <div className="nutrition-title-section">
                    <h2>Nutrition Facts</h2>
                    <p>{nutritionData.description}</p>
                    <p className="nutrition-serving-info">Per 100g serving</p>
                    {nutritionData.brandOwner && (
                        <p className="nutrition-serving-info">Brand: {nutritionData.brandOwner}</p>
                    )}
                </div>

                <div className="nutrition-actions">
                    <button
                        onClick={handleCopy}
                        className="btn btn-secondary"
                    >
                        <Copy className="btn-icon" />
                        Copy
                    </button>
                    <button
                        onClick={handleExport}
                        className="btn btn-primary"
                    >
                        <Download className="btn-icon" />
                        Export
                    </button>
                </div>
            </div>

            {/* Key Nutrients Grid */}
            <div className="nutrition-grid">
                {keyNutrients.map((nutrient, index) => (
                    <div key={index} className="nutrition-card">
                        <div className="nutrition-card-header">
                            <span className={nutrient.color}>{getNutrientIcon(nutrient.name)}</span>
                            <h4 className="nutrition-card-name">{nutrient.name}</h4>
                        </div>
                        <p className="nutrition-card-value">
                            {nutrient.amount > 0 ? nutrient.amount.toFixed(1) : '0'}
                            <span className="nutrition-card-unit">{nutrient.unit}</span>
                        </p>
                    </div>
                ))}
            </div>

            {/* Detailed Nutrients Table */}
            <div className="nutrition-table-container">
                <div className="nutrition-table-header">
                    <h3>Detailed Nutrition Information</h3>
                </div>

                <div className="nutrition-table-scroll">
                    <table className="nutrition-table">
                        <thead>
                            <tr>
                                <th>Nutrient</th>
                                <th>Amount</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nutritionData.foodNutrients
                                .filter(nutrient => nutrient.amount && nutrient.amount > 0)
                                .sort((a, b) => b.amount - a.amount)
                                .map((nutrient, index) => (
                                    <tr key={index}>
                                        <td>{nutrient.nutrient.name}</td>
                                        <td>{nutrient.amount.toFixed(2)}</td>
                                        <td>{nutrient.nutrient.unitName}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default NutritionDisplay
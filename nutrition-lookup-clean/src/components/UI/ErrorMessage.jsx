import React from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

function ErrorMessage({ error, onRetry, className = '' }) {
    if (!error) return null

    return (
        <div className={`error-message ${className}`}>
            <div className="error-content">
                <AlertCircle className="error-icon" />
                <div className="error-text">
                    <h3>Something went wrong</h3>
                    <p>{error}</p>
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="error-retry"
                        >
                            <RefreshCw className="error-retry-icon" />
                            Try Again
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage
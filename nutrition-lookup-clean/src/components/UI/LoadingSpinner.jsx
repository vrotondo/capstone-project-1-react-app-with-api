import React from 'react'
import { Loader2 } from 'lucide-react'

function LoadingSpinner({ size = 'md', message, className = '' }) {
    const sizeClass = `loading-spinner size-${size}`

    return (
        <div className={`loading-container ${className}`}>
            <Loader2 className={sizeClass} />
            {message && (
                <p className="loading-message">{message}</p>
            )}
        </div>
    )
}

export default LoadingSpinner
import React from 'react'

function Layout({ children }) {
    return (
        <div className="app-layout">
            <header className="header">
                <div className="header-container">
                    <h1>Nutrition Lookup</h1>
                </div>
            </header>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <p>© 2024 Nutrition Label Lookup</p>
            </footer>
        </div>
    )
}

export default Layout
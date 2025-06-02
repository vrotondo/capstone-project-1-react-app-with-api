import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Utensils, BarChart3, Download, ArrowRight } from 'lucide-react'

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Hero Section */}
            <div className="home-hero">
                <div className="home-hero-icon">
                    <Utensils />
                </div>

                <h1>Nutrition Label Lookup</h1>

                <p>
                    Find trustworthy nutrition information for everyday foods. Perfect for health-conscious individuals,
                    athletes, and anyone managing dietary needs with accurate USDA data.
                </p>

                <div className="home-cta">
                    <Link to="/search" className="btn btn-primary btn-lg">
                        <Search className="btn-icon-lg" />
                        Start Searching Foods
                        <ArrowRight className="btn-icon-lg" />
                    </Link>

                    <Link to="/about" className="btn btn-secondary btn-lg">
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Features Grid */}
            <div className="features-grid">
                <div className="card feature-card">
                    <div className="feature-icon blue">
                        <Search />
                    </div>
                    <h3>Comprehensive Search</h3>
                    <p>
                        Search through thousands of foods, ingredients, and branded products.
                        Find nutrition data for everything from fresh produce to packaged goods.
                    </p>
                </div>

                <div className="card feature-card">
                    <div className="feature-icon green">
                        <BarChart3 />
                    </div>
                    <h3>Detailed Analytics</h3>
                    <p>
                        Get comprehensive nutrition facts including macronutrients, vitamins, minerals,
                        and more. All data sourced from the official USDA database.
                    </p>
                </div>

                <div className="card feature-card">
                    <div className="feature-icon purple">
                        <Download />
                    </div>
                    <h3>Export & Share</h3>
                    <p>
                        Copy nutrition data to your clipboard or download detailed reports.
                        Perfect for meal planning, tracking, or sharing with healthcare providers.
                    </p>
                </div>
            </div>

            {/* Who Uses This Section */}
            <div className="card gradient-card">
                <h2 className="text-center mb-6">Who Benefits from This Tool?</h2>

                <div className="user-types-grid">
                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>🏃‍♂️</span>
                        </div>
                        <h4>Athletes</h4>
                        <p>Track macros and optimize nutrition for peak performance</p>
                    </div>

                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>🩺</span>
                        </div>
                        <h4>Health Conscious</h4>
                        <p>Make informed dietary choices with accurate data</p>
                    </div>

                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>👨‍🍳</span>
                        </div>
                        <h4>Meal Planners</h4>
                        <p>Plan balanced meals with detailed nutrition facts</p>
                    </div>

                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>🏥</span>
                        </div>
                        <h4>Medical Needs</h4>
                        <p>Manage dietary restrictions and allergies safely</p>
                    </div>
                </div>
            </div>

            {/* Quick Start Guide */}
            <div className="card">
                <h2 className="mb-6">How It Works</h2>

                <div className="steps-grid">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Search for Food</h3>
                            <p>
                                Enter any food name, ingredient, or brand. Our database contains
                                thousands of items from the USDA FoodData Central.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>View Results</h3>
                            <p>
                                Browse through search results and select the food item
                                that matches what you're looking for.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Get Nutrition Facts</h3>
                            <p>
                                View detailed nutrition information, copy data to clipboard,
                                or export as a file for your records.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
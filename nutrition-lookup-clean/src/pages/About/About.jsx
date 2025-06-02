import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Database, Shield, Users, Target, Zap } from 'lucide-react'

function About() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Hero Section */}
            <div className="text-center">
                <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
                    About Nutrition Label Lookup
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.6' }}>
                    Your trusted source for accurate, comprehensive nutrition information powered by the USDA FoodData Central database.
                </p>
            </div>

            {/* Mission Statement */}
            <div className="card gradient-card text-center">
                <div className="max-w-2xl mx-auto">
                    <Target style={{ width: '3rem', height: '3rem', color: '#16a34a', margin: '0 auto 1rem' }} />
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
                        Our Mission
                    </h2>
                    <p style={{ color: '#374151', lineHeight: '1.6' }}>
                        We believe everyone deserves access to accurate, trustworthy nutrition information.
                        Our tool makes it easy to find detailed nutrition facts for everyday foods,
                        empowering you to make informed dietary choices that support your health and wellness goals.
                    </p>
                </div>
            </div>

            {/* Problem We Solve */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem' }}>
                        The Problem We Solve
                    </h2>
                    <div style={{ color: '#6b7280' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            Finding reliable nutrition information shouldn't be complicated. Many existing resources are:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ color: '#ef4444', marginTop: '0.25rem' }}>•</span>
                                Cluttered with ads and irrelevant content
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ color: '#ef4444', marginTop: '0.25rem' }}>•</span>
                                Inconsistent or unreliable in their data sources
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ color: '#ef4444', marginTop: '0.25rem' }}>•</span>
                                Difficult to navigate and search through
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <span style={{ color: '#ef4444', marginTop: '0.25rem' }}>•</span>
                                Missing detailed nutritional breakdowns
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                        Our Solution
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Zap style={{ width: '1.25rem', height: '1.25rem', color: '#16a34a' }} />
                            <span style={{ color: '#374151' }}>Fast, clean interface</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Database style={{ width: '1.25rem', height: '1.25rem', color: '#16a34a' }} />
                            <span style={{ color: '#374151' }}>USDA-verified data</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Shield style={{ width: '1.25rem', height: '1.25rem', color: '#16a34a' }} />
                            <span style={{ color: '#374151' }}>No ads or distractions</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Users style={{ width: '1.25rem', height: '1.25rem', color: '#16a34a' }} />
                            <span style={{ color: '#374151' }}>Export and share features</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who We Serve */}
            <div className="card">
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem', textAlign: 'center' }}>
                    Who We Serve
                </h2>

                <div className="user-types-grid">
                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>🏃‍♂️</span>
                        </div>
                        <h4>Athletes & Fitness Enthusiasts</h4>
                        <p>Track macronutrients, plan meals, and optimize nutrition for peak performance and recovery.</p>
                    </div>

                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>🩺</span>
                        </div>
                        <h4>Health-Conscious Individuals</h4>
                        <p>Make informed dietary choices with accurate, comprehensive nutrition data from trusted sources.</p>
                    </div>

                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>👨‍⚕️</span>
                        </div>
                        <h4>People with Medical Dietary Needs</h4>
                        <p>Manage diabetes, heart conditions, allergies, and other dietary restrictions with precise nutritional information.</p>
                    </div>

                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>👨‍🍳</span>
                        </div>
                        <h4>Meal Planners & Nutritionists</h4>
                        <p>Create balanced meal plans and provide clients with accurate nutritional analysis and recommendations.</p>
                    </div>

                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>📚</span>
                        </div>
                        <h4>Students & Educators</h4>
                        <p>Learn about nutrition science and food composition with reliable, educational data for research and study.</p>
                    </div>

                    <div className="user-type">
                        <div className="user-type-icon">
                            <span>👥</span>
                        </div>
                        <h4>Families</h4>
                        <p>Plan nutritious family meals and teach children about healthy eating with easy-to-understand nutrition facts.</p>
                    </div>
                </div>
            </div>

            {/* Data Source */}
            <div className="card">
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem' }}>
                    Our Data Source
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Database style={{ width: '2rem', height: '2rem', color: '#16a34a' }} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>
                                USDA FoodData Central
                            </h3>
                        </div>

                        <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6' }}>
                            All nutrition data comes from the USDA FoodData Central database, the most comprehensive
                            and authoritative source of food composition data in the United States.
                        </p>

                        <a
                            href="https://fdc.nal.usda.gov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#16a34a',
                                fontWeight: '500',
                                textDecoration: 'none'
                            }}
                        >
                            Visit USDA FoodData Central
                            <ExternalLink style={{ width: '1rem', height: '1rem' }} />
                        </a>
                    </div>

                    <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem' }}>
                        <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                            Why USDA Data?
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', color: '#6b7280' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <Shield style={{ width: '1rem', height: '1rem', color: '#16a34a', marginTop: '0.125rem', flexShrink: 0 }} />
                                Government-verified accuracy and reliability
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <Database style={{ width: '1rem', height: '1rem', color: '#16a34a', marginTop: '0.125rem', flexShrink: 0 }} />
                                Over 300,000 food items in the database
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <Users style={{ width: '1rem', height: '1rem', color: '#16a34a', marginTop: '0.125rem', flexShrink: 0 }} />
                                Used by nutrition professionals worldwide
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <Zap style={{ width: '1rem', height: '1rem', color: '#16a34a', marginTop: '0.125rem', flexShrink: 0 }} />
                                Regularly updated with new foods and data
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Technology */}
            <div className="card" style={{ backgroundColor: '#f9fafb' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem', textAlign: 'center' }}>
                    Built with Modern Technology
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1.5rem',
                    textAlign: 'center'
                }}>
                    <div>
                        <div style={{ backgroundColor: '#dbeafe', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>⚛️</span>
                        </div>
                        <h4 style={{ fontWeight: '600', color: '#1f2937' }}>React</h4>
                        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Modern UI framework</p>
                    </div>

                    <div>
                        <div style={{ backgroundColor: '#dcfce7', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🎨</span>
                        </div>
                        <h4 style={{ fontWeight: '600', color: '#1f2937' }}>Custom CSS</h4>
                        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Responsive design</p>
                    </div>

                    <div>
                        <div style={{ backgroundColor: '#e9d5ff', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>⚡</span>
                        </div>
                        <h4 style={{ fontWeight: '600', color: '#1f2937' }}>Vite</h4>
                        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Fast build tool</p>
                    </div>

                    <div>
                        <div style={{ backgroundColor: '#fecaca', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🔌</span>
                        </div>
                        <h4 style={{ fontWeight: '600', color: '#1f2937' }}>USDA API</h4>
                        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Real-time data</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="card dark-gradient-card">
                <h2>Ready to Start Your Nutrition Journey?</h2>
                <p>
                    Join thousands of users who trust our tool for accurate nutrition information.
                </p>
                <Link
                    to="/search"
                    className="btn"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: 'white',
                        color: '#16a34a',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontWeight: '600'
                    }}
                >
                    Start Searching Foods
                    <Zap style={{ width: '1.25rem', height: '1.25rem' }} />
                </Link>
            </div>
        </div>
    )
}

export default About
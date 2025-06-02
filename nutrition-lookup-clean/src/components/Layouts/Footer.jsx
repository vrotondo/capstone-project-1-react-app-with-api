import React from 'react'
import { Heart, ExternalLink } from 'lucide-react'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* About Section */}
                    <div className="footer-section">
                        <h3>Nutrition Label Lookup</h3>
                        <p>
                            Find trustworthy nutrition information for everyday foods.
                            Our data comes directly from the USDA FoodData Central database,
                            ensuring accuracy and reliability for your dietary needs.
                        </p>
                    </div>

                    {/* Data Source */}
                    <div className="footer-section">
                        <h3>Data Source</h3>
                        <div>
                            <a
                                href="https://fdc.nal.usda.gov/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                USDA FoodData Central
                                <ExternalLink style={{ width: '12px', height: '12px', marginLeft: '4px' }} />
                            </a>
                            <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
                                Official nutrition database maintained by the
                                U.S. Department of Agriculture
                            </p>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="footer-section">
                        <h3>Important Note</h3>
                        <p style={{ fontSize: '12px' }}>
                            This tool is for informational purposes only.
                            Nutrition values may vary based on preparation methods,
                            brands, and sources. Always consult healthcare
                            professionals for dietary advice.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>
                        Made with <Heart className="heart-icon" /> for better nutrition awareness
                    </p>
                    <p style={{ fontSize: '12px', marginTop: '8px' }}>
                        © {new Date().getFullYear()} Nutrition Label Lookup. Educational use only.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
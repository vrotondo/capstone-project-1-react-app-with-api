# 🥗 Nutrition Label Lookup

A modern React application that provides accurate nutrition information for everyday foods using the USDA FoodData Central API. Perfect for health-conscious individuals, athletes, and anyone managing dietary needs.

![Nutrition Label Lookup](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.4.5-purple) ![CSS3](https://img.shields.io/badge/CSS3-Modern-orange)

## 🌟 Features

- **🔍 Comprehensive Search**: Search through thousands of foods from the USDA database
- **📊 Detailed Nutrition Facts**: View macronutrients, vitamins, minerals, and more
- **📋 Export & Copy**: Download nutrition data or copy to clipboard
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎨 Modern UI**: Clean, intuitive interface with custom CSS

## 🎯 Problem Solved

This application solves the problem of finding **trustworthy nutrition information** for everyday foods. Many existing resources are cluttered with ads, have inconsistent data, or are difficult to navigate. Our tool provides:

- Clean, ad-free interface
- USDA-verified accurate data
- Easy search and export functionality
- Detailed nutritional breakdowns

## 👥 Target Users

- **Athletes & Fitness Enthusiasts**: Track macros and optimize nutrition
- **Health-Conscious Individuals**: Make informed dietary choices
- **People with Medical Dietary Needs**: Manage diabetes, allergies, and restrictions
- **Meal Planners & Nutritionists**: Create balanced meal plans
- **Students & Educators**: Learn about nutrition science

## 🛠️ Technology Stack

- **Frontend**: React 18 with modern hooks
- **Build Tool**: Vite for fast development
- **Styling**: Custom CSS with responsive design
- **Routing**: React Router for navigation
- **State Management**: Context API with useReducer
- **Icons**: Lucide React
- **API**: USDA FoodData Central

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Header, Footer, Layout
│   ├── Search/         # SearchBar, SearchResults
│   ├── Nutrition/      # NutritionDisplay
│   └── UI/             # ErrorMessage, LoadingSpinner
├── context/            # React Context for state management
├── pages/              # Page components
│   ├── Home/          # Landing page
│   ├── Search/        # Search functionality
│   ├── NutritionFacts/ # Detailed nutrition view
│   └── About/         # About page
├── services/          # API service layer
├── utils/             # Utility functions
├── index.css         # Global styles and components
└── App.jsx           # Main app component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nutrition-label-lookup.git
   cd nutrition-label-lookup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔗 API Information

This application uses the **USDA FoodData Central API** to provide accurate nutrition data.

- **API Endpoint**: `https://api.nal.usda.gov/fdc/v1`
- **Data Source**: Official USDA database with 300,000+ food items
- **API Key**: Embedded in the application for demonstration purposes
- **Rate Limits**: Standard USDA API rate limits apply

### API Endpoints Used

1. **Search Foods**: `/foods/search` - Search for food items
2. **Food Details**: `/food/{fdcId}` - Get detailed nutrition information

## 📖 How to Use

1. **Search for Foods**: Enter any food name, ingredient, or brand
2. **Browse Results**: Click on any food item from the search results
3. **View Nutrition Facts**: See detailed nutrition information per 100g
4. **Export Data**: Copy to clipboard or download as a text file

## 🎨 Styling Architecture

The application uses **custom CSS** with a modular approach:

### Key Features:
- **CSS Custom Properties**: For consistent theming
- **Responsive Grid Layouts**: Mobile-first design
- **Component-based Classes**: Reusable styling patterns
- **Modern CSS Features**: Flexbox, Grid, and CSS animations
- **No Dependencies**: Pure CSS without external frameworks

### Main Style Categories:
- **Layout Components**: Header, footer, main content areas
- **UI Components**: Buttons, cards, forms, tables
- **Utility Classes**: Spacing, colors, typography
- **Component-specific**: Specialized styles for nutrition display

## 🏗️ Architecture Highlights

### Modular Design
- **Components**: Reusable UI components with single responsibilities
- **Services**: Centralized API calls with error handling
- **Context**: Global state management for nutrition data
- **Utils**: Helper functions for data formatting and processing

### Performance Optimizations
- **Code Splitting**: React Router for page-level splitting
- **Efficient State Management**: Context API with useReducer
- **Optimized Builds**: Vite's fast bundling and tree shaking
- **CSS Organization**: Modular CSS for better caching

### Error Handling
- **API Errors**: Graceful handling of network and API errors
- **User Feedback**: Clear error messages and retry options
- **Loading States**: Visual feedback during data fetching

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for React Router (add `_redirects` file with `/* /index.html 200`)

### Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

## 🔧 Challenges & Solutions

### Challenge 1: API Rate Limiting
**Solution**: Implemented debounced search and efficient caching

### Challenge 2: Large Dataset Navigation
**Solution**: Pagination and optimized search with filters

### Challenge 3: Complex Nutrition Data Structure
**Solution**: Utility functions to normalize and categorize nutrients

### Challenge 4: Cross-Device Compatibility
**Solution**: Responsive design with CSS Grid and Flexbox

### Challenge 5: Styling Without Framework
**Solution**: Organized CSS architecture with component-based classes

## 🐛 Known Issues

- API responses may be slower for less common foods
- Some branded foods might have incomplete nutrition data
- Export functionality requires modern browser support

## 🔮 Future Enhancements

- [ ] Save favorite foods locally
- [ ] Compare nutrition between multiple foods
- [ ] Meal planning functionality
- [ ] Nutrition goal tracking
- [ ] Dark mode support
- [ ] Offline support with service workers
- [ ] Print-friendly nutrition labels

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **USDA FoodData Central** for providing comprehensive nutrition data
- **React Team** for the excellent framework
- **Vite Team** for the blazing fast build tool
- **Lucide** for beautiful icons

## 📞 Contact

**Project Creator**: [Your Name]
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

**Project Link**: [https://github.com/yourusername/nutrition-label-lookup](https://github.com/yourusername/nutrition-label-lookup)

---

**⭐ If this project helped you, please give it a star on GitHub!**
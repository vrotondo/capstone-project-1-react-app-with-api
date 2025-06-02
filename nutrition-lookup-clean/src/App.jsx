import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import NutritionFacts from './pages/NutritionFacts/NutritionFacts'
import About from './pages/About/About'
import { NutritionProvider } from './context/NutritionContext'

function App() {
  return (
    <NutritionProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/nutrition/:fdcId" element={<NutritionFacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </NutritionProvider>
  )
}

export default App
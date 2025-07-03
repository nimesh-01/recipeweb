import React from 'react'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Recipes = lazy(() => import('../Pages/Recipes'))
const Home = lazy(() => import('../Pages/Home'))
const Create = lazy(() => import('../Pages/Create'))
const Fav = lazy(() => import('../Pages/Fav'))
const About = lazy(() => import('../Pages/About'))

const RecipesDetail = lazy(() => import('../Pages/RecipesDetail'))
const Pagenotfound = lazy(() => import('../Pages/Pagenotfound'))
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/recipesdetail/:id" element={<RecipesDetail />} />
            <Route path="/create" element={<Create />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/about" element={<About />} />


            <Route path="*" element={<Pagenotfound />} />


        </Routes >
    )
}

export default MainRoutes
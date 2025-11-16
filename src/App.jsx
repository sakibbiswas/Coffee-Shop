import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { setTheme } from './redux/themeSlice'

export default function App() {
  const theme = useSelector((state) => state.theme.mode)

  // Apply dark/light class to html
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4">
        <section id="home"><Hero /></section>
        <section id="menu"><MenuSection /></section>
        <section id="about"><About /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  )
}

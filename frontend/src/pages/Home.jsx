import React from 'react'
import Hero from '../components/Hero'
import ShopContextProvider from '../context/ShopContext'

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopContextProvider />
    </div>
  )
}

export default Home

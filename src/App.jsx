import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Card from './components/Card'

export default function App () {
  return (
    <div className='container'>
      <Navbar />
      <Banner />
      <Card />
    </div>
  )
}
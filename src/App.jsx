import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Card from './components/Card'
import data from './data'


const App = () => {


  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        img = {`./src/assets/images/${item.coverImg}`}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        country = {item.location}
        title = {item.title}
        price = {item.price}
      />
    )
  })

  return (
    <div className='container'>
      <Navbar />
      <div className='content' >
        <Banner />
        <section className='stories'>
          {cards}
        </section>
      </div >

      

    </div>
  )
}

export default App
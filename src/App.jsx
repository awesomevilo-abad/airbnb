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
        item = {item}
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
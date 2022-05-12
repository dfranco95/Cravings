import React from 'react'
import Popular from '../components/Popular';
import Quick from '../components/Quick';
import Veg from '../components/Veg';
import Starters from '../components/Starters';

function Home() {
  return (
    <div>
        <h3>Home</h3>
        <Popular />
        <Veg />
        <Starters />
        <Quick />
    </div>
    
  )
}


export default Home
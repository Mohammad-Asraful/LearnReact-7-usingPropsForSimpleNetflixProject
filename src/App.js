import React from 'react'
import Card from './Component/Card'
import Sdata from './Component/Sdata'
import './index.css'


const App = () => {
  return (
    <>
      <h1 className='heading-style'>List of top 5 Netflix Series in 2020</h1>

      {
        Sdata.map((sData) => {
          return (
            <Card
              key={sData.id}
              imgsrc={sData.imgsrc}
              title={sData.title}
              sname={sData.sname}
              link={sData.link}
            />
          )
        })
      }
    </>
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Card from './Card'
ReactDOM.render(
   <>

   <h1 className='PNHEAD'>Prime & Netflix Shows</h1>
   <div className="grid">
  <Card imgsrc="https://picsum.photos/200" title="A starry night" para="Look up at the night sky, and find yourself in the amazing mountain range of Aspen."/>
  <Card imgsrc="https://picsum.photos/200" title="A starry night" para="Look up at the night sky, and find yourself in the amazing mountain range of Aspen."/>
  <Card imgsrc="https://picsum.photos/200" title="A starry night" para="Look up at the night sky, and find yourself in the amazing mountain range of Aspen."/>
        </div>  
   </>
   ,document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className='tw-allFollowCards-container'>
      <h1>A quién seguir</h1>
    <div className='tw-allFollowCards'>
      <App />
    </div>
  </div>
  
)


import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import Header from './header/header'
import Content from './content/content'
import Footer from './footer/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Content/>
    <Footer/>
  </React.StrictMode>,
)

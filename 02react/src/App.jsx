import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <Card imgUrl="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"/>
      <Card imgUrl="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"/>
      <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErDL1tl6xeGFzwxM6VOvUyBIjapS7czYdag&s"/>
      <Card imgUrl="https://assets-news.housing.com/news/wp-content/uploads/2022/04/07013406/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg"/>

    </>
  )
}

export default App

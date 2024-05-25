import { useState, useEffect } from 'react'
import ImageCard from './ImageCard'
import ImageSearch from './ImageSearch'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=43477780-8f4ac71c00505d36070abbdb9&q=${term}&image_type=photo`).then(res => res.json()).then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
  }, [term])

  return (
   <div className='px-2 dark:bg-gray-900 dark:text-gray-300'>
    <ImageSearch searchText={text => setTerm(text)} isDark={isDark} setIsDark={setIsDark} />

    {!isLoading && images.length == 0 &&<div className='h-screen'><h1 className='text-6xl text-center mt-32'>No image was found</h1></div>}

    {isLoading ? 
      <h1 className='text-6xl text-center mt-32'>Loading...</h1>
    :
      <div className='grid grid-cols-3 gap-4 overflow-hidden'>
      {images.map(image => <ImageCard image={image} key={image.id} />)}
      </div>
    } 
   </div>
  )
}

export default App

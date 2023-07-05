import React, { useContext } from 'react'
import { useEffect } from 'react'
import AppContext from '../Context/AppContext'
import "../Css/Portfolio.css"
import { Navbar } from './Navbar'
import "../Css/lightbox.css"
import "./lightbox"
import { Spinner } from './Spinner'
export const Portfolio = () => {

    const {images,fetchImages,isLoading}=useContext(AppContext)
    useEffect(()=>{
        fetchImages();    
    },[])
  return (
    <div>
     <Navbar></Navbar>

     {isLoading ?(<Spinner></Spinner>):(
        <div className = "gallery">

        <div className = "gallery-wrapper">
            
            {images.map((image) => (
                <div key={image._id}>
    
    <a class="example-image-link" href={image.imageUrl} data-lightbox="example-1"><img class="example-image" src={image.imageUrl} alt="" /></a>
    
    
    
                </div>
            ))}
            </div>
           
        </div>
     )}


</div>

  )
}

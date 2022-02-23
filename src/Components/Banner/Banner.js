import React, { useEffect, useState } from 'react';
import {api_Key,imageUrl} from '../../constants/constants'
import axios from '../../axios';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState()
useEffect(() => {
    axios.get(`trending/all/week?api_key=${api_Key}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[2])
    })
  
}, []);

  return (
      
  <div  style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
      <div className='content'>
          <h1 className='title'>{movie ?movie.title:""}</h1>
          <div className='banner_buttons'>
              <button className='buttons'>Play</button>
              <button className='buttons'>My List</button>

          </div>
          <div>
          <h1 className='description'>
         {movie?movie.overview:""} 
          </h1>
          </div>
          <div className='fade_bottom'>

          </div>
      </div>



        </div>)
}

export default Banner;

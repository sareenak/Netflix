import React, { useEffect } from 'react';
import {api_Key} from '../../constants/constants'
import axios from '../../axios';
import './Banner.css'

function Banner() {
useEffect(() => {
    axios.get(`trending/all/week?api_key=${api_Key}&language=en-US`).then((response)=>{
        console.log(response.data)
    })
  
}, []);

  return (
  <div className='banner'>
      <div className='content'>
          <h1 className='title'>Movie Name</h1>
          <div className='banner_buttons'>
              <button className='buttons'>Play</button>
              <button className='buttons'>My List</button>

          </div>
          <div>
          <h1 className='description'>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
          </h1>
          </div>
          <div className='fade_bottom'>

          </div>
      </div>



        </div>)
}

export default Banner;

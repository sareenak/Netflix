import  React ,{useState,useEffect} from 'react';
import './RawPost.css'

import {api_Key,imageUrl} from '../../constants/constants'
import axios from '../../axios';



function RawPost(props) {
  const [movies,setMovies] = useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${api_Key}&with_networks=213`).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network error")
    })
  }, [])
  
  return (<div className='row'>
      <h2 className=''>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img className='poster'  src={`${imageUrl+obj.backdrop_path}`} alt="Posters" />

        )}
          
          
          
      </div>


  </div>)
}

export default RawPost;

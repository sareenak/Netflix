import  React ,{useState,useEffect} from 'react';
import './RawPost.css'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios';



function RawPost(props) {
  const [movies,setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
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
        <img className= {props.isSmall ?'smallPoster':'poster'}   src={`${imageUrl+obj.backdrop_path}`} alt="Posters" />

        )}
          
          
          
      </div>


  </div>)
}

export default RawPost;

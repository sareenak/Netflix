import  React ,{useState,useEffect} from 'react';
import './RawPost.css'
import  YouTube from 'react-youtube' 
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
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (<div className='row'>
      <h2 className=''>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img className= {props.isSmall ?'smallPoster':'poster'}   src={`${imageUrl+obj.backdrop_path}`} alt="Posters" />

        )}
          
         </div>
         <YouTube videoId='2g811Eo7K8U' opts={opts} />


  </div>)
}

export default RawPost;

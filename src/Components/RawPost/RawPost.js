import  React ,{useState,useEffect} from 'react';
import './RawPost.css'
import  YouTube from 'react-youtube' 
import {api_Key, imageUrl} from '../../constants/constants'
import axios from '../../axios';



function RawPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
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
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${api_Key}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Trailer not available')
      }
    })
  }
  return (<div className='row'>
      <h2 className=''>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className= {props.isSmall ?'smallPoster':'poster'}   src={`${imageUrl+obj.backdrop_path}`} alt="Posters" />

        )}
          
         </div>
       { urlId && <YouTube videoId={urlId.key} opts={opts} /> }


  </div>)
}

export default RawPost;

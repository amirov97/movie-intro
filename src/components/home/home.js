import React,{useState , useEffect} from "react";
import {fetchMovies} from "../../service";
import Carousel from 'react-bootstrap/Carousel'


const Home = ()=>{

    const[nowPlaying,setNowPlaying]=useState([])

    useEffect(()=>{
        const fetchApi = async ()=>{
            setNowPlaying(await fetchMovies())
        }
        fetchApi()
    },[])

    console.log(nowPlaying)

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Carousel interval={3000}>
                    {nowPlaying.slice(0,5).map((item,index)=>{
                        return (
                                <Carousel.Item key={index} style={{position:'relative'}}>
                                    <img
                                        className="d-block w-100 "
                                        src={item.backPoster}
                                        alt="First slide"
                                        style={{height:'600px',filter:'brightness(1)'}}
                                    />
                                    <div className='position-absolute d-flex justify-content-center align-items-center w-100'
                                        style={{bottom:'0',top:'0',zIndex:'1'}}>
                                        <div><img src="https://img.icons8.com/color/96/000000/youtube-play.png"/></div>
                                    </div>
                                    <div className='position-absolute d-flex justify-content-center align-items-center w-100'
                                         style={{bottom:'20%',zIndex:'1'}}>
                                        <div style={{width:'100%',height:'20%',backgroundColor:'black',opacity:'.7',display:'flex',justifyContent:'center'}}>
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                </Carousel.Item>
                        )
                    })}
                    </Carousel>

                </div>
            </div>
        </div>

    )
}

export default Home
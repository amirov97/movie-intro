import axios from 'axios'

const apiKey = 'b166b432642a70aefd0e354e94d01432'
const url = 'https://api.themoviedb.org/3'
const nowPlayingUrl = `${url}/movie/now_playing`
const topRatedUrl = `${url}/movie/top_rated`
const movieUrl = `${url}/movie`
const genreUrl = `${url}/genre/movie/list`
const moviesUrl = `${url}/discover/movie`
const personUrl = `${url}/trending/person/week`


export const fetchMovies = async ()=>{
    try {
        const {data} = await axios.get(nowPlayingUrl,{
            params:{
                api_key:apiKey,
                language:'en_US',
                page:'1'
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data.results.map(item=>({
            id : item.id,
            backPoster: posterUrl+ item.backdrop_path,
            popularity: item.popularity,
            title: item.title ,
            poster: posterUrl + item.poster_path,
            overview:item.overview,
            rating:item.vote_average
        }))

        return modifiedData

    }catch (e) {

    }
}

export const fetchGenres = async ()=>{
    try{
        const {data} = await axios.get(genreUrl,{
            params:{
                api_key:apiKey,
                language:'en_US',
                page:'1'
            }
        })

        const modifiedData = data.genres.map(item=>({
            id:item.id,
            name:item.name
            })
        )

        return modifiedData

    }catch (e) {

    }
}
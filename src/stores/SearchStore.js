import {defineStore} from 'pinia'
import { useMovieStore } from './MovieStore';
const url = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='
export const useSearchStore = defineStore('searchStore', {
    state: () => ({
        movies: []
    }),
    actions:{
        async getMovies(search){
            const res = await fetch(`${url}${search}`, {
                method: "GET",
                headers:{
                    'X-API-KEY': '2e9c399e-4230-466c-b3d9-9e51c8314c14',
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json()
            console.log(data)
            this.movies = data.films;
            console.log(this.movies)
        },
        addToUserMovies(object){
            const movieStore = useMovieStore();
            movieStore.movies.push({...object, isWatched: false})
            movieStore.activeTab = 1;
        }
    },
    
})
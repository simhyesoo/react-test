import { create } from 'zustand';
import axios from 'axios'

export const useStore = create((set) => {
    return {

        popular: [],
        top_rated: [],
        detail: {},
        origin: ' https://image.tmdb.org/t/p/original/',
        thumb: 'https://image.tmdb.org/t/p/w300/',
        getMovie: (type) => {
            axios(`https://api.themoviedb.org/3/movie/${type}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
                .then(res => {
                    set({ [type]: res.data.results });
                });
        },
        detailMovie: (id) => {
            axios(`https://api.themoviedb.org/3/movie/${id}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
                .then(res => {
                    console.log(res.data)
                    set({ detail: res.data });
                });
        }
    }
});




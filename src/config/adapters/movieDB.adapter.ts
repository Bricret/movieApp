import { HttpAdapter } from "./http/Http.adapter";
import { axiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new axiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ec50ff1809a454276c1c39474e8a000a',
        language: 'es'
    }
})


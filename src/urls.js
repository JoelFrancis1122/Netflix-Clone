import { API_KEY } from "./Components/constants/constants"

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const scifi = `discover/movie?api_key=${API_KEY}&with_genres=878`;

export const action = `discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc`;

export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`;

export const horror =`discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc`;

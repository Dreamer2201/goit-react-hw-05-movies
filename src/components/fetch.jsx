import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const myAPIkey = '489c503ccf1d5d4070a54da171b2b283';

const fetchRequest = async (page) => {
    
    const response = await axios.get(`${BASE_URL}trending/all/day?api_key=${myAPIkey}&page=${page}`);
    console.log(response.data);
    return response.data;
}

const fetchOneMovie = async (id) => {
    
    const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${myAPIkey}&language=en-US`);
    return response.data;

}
export { fetchRequest, fetchOneMovie };


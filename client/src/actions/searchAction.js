import axios from 'axios';
import { URL_SEARCH } from '../constants';

const Search = async ({ name, type, year }) => {
    const searched = await axios.get(URL_SEARCH + `?name=${name}&t=${type}&y=${year}`)
    console.log('searched: ', searched)
    return searched.data
};

export default Search;
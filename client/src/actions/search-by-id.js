import axios from 'axios';
import { URL_SEARCH } from '../constants';

export const SearchByID = async (id) => {
    const searched = await axios.get(URL_SEARCH + `id/${id}`)
    return searched.data
};


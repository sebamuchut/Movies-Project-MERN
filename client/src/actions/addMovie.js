import axios from 'axios';
import { URL_CREATE } from '../constants';

const addMovieAction = async (body) => {
    const added = await axios.post(URL_CREATE, body)
    return added
};

export default addMovieAction;
import axios from 'axios';
import { URL_GET_TYPES } from '../constants';

const getTypesAction = async () => {
    let response = []
    const res = await axios.get(URL_GET_TYPES)
    res.data.forEach(element => {
        response.push(element.Name)
    });
    return response
};

export default getTypesAction;
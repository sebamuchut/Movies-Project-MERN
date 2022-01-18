import { NavLink } from 'react-router-dom';
import {
    MainCard,
    TextDiv,
    TextStyle,
    TitleStyle
} from './styles/CardComponent-styles'
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const Card = ({ movie }) => {
    const poster = movie.Poster;
    const id = movie.imdbID || movie._id

    return (
        <NavLink to={`./detail/${id}`} >
            <MainCard>
                <img src={poster} alt='' />
                <TextDiv>
                    <TitleStyle>{movie.Title}</TitleStyle>
                    <TextStyle>{movie.Year}</TextStyle>
                    <TextStyle>{capitalizeFirstLetter(movie.Type)}</TextStyle>
                </TextDiv>
            </MainCard>
        </NavLink>
    )
};
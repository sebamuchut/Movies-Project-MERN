import { Card } from './CardComponent';
import { CardsMainDiv } from './styles/CardsComponent-styles';

export const Cards = ({ movies }) => {
    const key = movies?.imdbID || movies?._id
    return (
        <CardsMainDiv>
            {
                movies && movies.map(e => (
                    <Card movie={e} key={key}/>
                ))
            }
        </CardsMainDiv>
    )
};
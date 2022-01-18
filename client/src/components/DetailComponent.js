import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchByID } from "../actions/search-by-id";
import { useNavigate } from 'react-router-dom'
import {
    MainDetailDiv,
    Button,
    DetailDiv, 
    AllTextDiv,
    TitlePlotDiv,
    MovieTitle,
    Text,
    TextPlot,
} from './styles/DetailComponent-styles';

export const DetailMovie = () => {
    const { id } = useParams();
    const [ data, setData ] = useState([])
    const navigate = useNavigate();

    const fetchData = async (id) => {
        const res = await SearchByID(id);
        setData(res)
    };
   
    useEffect(() => {
        fetchData(id)
    }, []);

    const goBack = () => {
        navigate('/')
    }

    return(
        <MainDetailDiv>
            <Button onClick={goBack}>OMDb The Open Movie Database</Button>
            <DetailDiv>
                <img src={data.Poster} alt='' />
                <AllTextDiv>
                    <TitlePlotDiv>
                        <MovieTitle>{data.Title}</MovieTitle>
                        <Text>Director: {data.Director}</Text>
                        <TextPlot>"{data.Plot}"</TextPlot>
                    </TitlePlotDiv>
                    <br></br>
                    <Text>Writer: {data.Writer}</Text>
                    <Text>Actors: {data.Actors}</Text>
                    <Text>Year: {data.Year}</Text>
                    <Text>Rated: {data.Rated}</Text>
                    <Text>Runtime: {data.Runtime}</Text>
                    <Text>Genre: {data.Genre}</Text>
                    <Text>Language: {data.Language}</Text>
                    <Text>Country: {data.Country}</Text>
                    <Text>Type: {data.Type}</Text>
                    {
                        data.Ratings?.map(e => (
                            <Text>Rating {e.Source}: {e.Value}</Text>
                            ))
                    }
                    <br></br>
                </AllTextDiv>
            </DetailDiv>
        </MainDetailDiv>
    )
};
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import addMovieAction from "../actions/addMovie";
import { Button } from './styles/DetailComponent-styles';
import {
    FormDiv,
    SecondDiv,
    ButtonSubmit,
    Form
} from './styles/AddMovieComponent-styles';

export const AddMovie = () => {
    const [ form, setForm ] = useState({ 
        Title: '',
        Year: '', 
        Runtime: '', 
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot: '',
        Language: '',
        Country: '',
        Poster: '',
        Type: ''
    });
    const [ result, setResult ] = useState();
    const [ error, setError ] = useState()
    const navigate = useNavigate();


    const onChange = (e) => {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value})
    };

    const submitForm = () => {
        if(form.Title.length>1 &&
            form.Year.length>1 &&
            form.Genre.length>1 &&
            form.Type.length>1){
                const afterClick = addMovieAction(form);
                setResult(afterClick)
            }
    };

    const goBack = () => {
        navigate('/')
    }

    return (
        <FormDiv>
            <Button onClick={goBack}>OMDb The Open Movie Database</Button>
            <SecondDiv>
                <h1 style={{ margin: '2rem'}}>Add a movie to the Database</h1>
                <Form>
                    <label>Title: </label>
                    <input type='text' name='Title' onChange={onChange} maxLength='150' required placeholder="required field"/>
                    <label>Year: </label>
                    <input type='number' name='Year' onChange={onChange} required placeholder="required field"/>
                    <label>Runtime: </label>
                    <input type='text' name='Runtime' onChange={onChange} maxLength='150'/>
                    <label>Genre: </label>
                    <input type='text' name='Genre' onChange={onChange} maxLength='150' required placeholder="required field"/>
                    <label>Director: </label>
                    <input type='text' name='Director' onChange={onChange} maxLength='150'/>
                    <label>Writer: </label>
                    <input type='text' name='Writer' onChange={onChange} maxLength='150'/>
                    <label>Actors: </label>
                    <input type='text' name='Actors' onChange={onChange} maxLength='150'/>
                    <label>Plot: </label>
                    <input type='text' name='Plot' onChange={onChange} maxLength='2000'required placeholder="required field"/>
                    <label>Language: </label>
                    <input type='text' name='Language' onChange={onChange} maxLength='150'/>
                    <label>Country: </label>
                    <input type='text' name='Country' onChange={onChange} maxLength='150'/>
                    <label>Type: </label>
                    <input type='text' name='Type' onChange={onChange} maxLength='20' required placeholder="required field" /> 
                <ButtonSubmit onClick={submitForm}>Add Movie</ButtonSubmit>
                </Form>
            </SecondDiv>
        </FormDiv>
    )
};
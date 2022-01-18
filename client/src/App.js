import {Route, Routes} from 'react-router-dom';
import { AddMovie } from './components/AddMovieComponent';
import { DetailMovie } from './components/DetailComponent';
import { LandingPage } from './LandingPage';

export const App = () => {
    return (
        <Routes>
            <Route path='/' exact element={ <LandingPage /> } />
            <Route path='/detail/:id' element={ <DetailMovie />} />
            <Route path='/add' element={ <AddMovie /> } />
        </Routes>
    )
};
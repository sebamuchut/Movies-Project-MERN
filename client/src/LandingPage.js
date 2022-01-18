import { useEffect, useState } from 'react';
import Search from './actions/searchAction';
import FilterSideBar from './components/FilterComponent';
import {
  MainDiv,
  PageTitle,
  SearchBar,
  selectStyle,
  inputSearch,
  FilterCardContainer
} from './LandingPage-styles';
import { Cards } from './components/CardsComponent';
import { Pagination } from './actions/pagination';
import { NavLink } from 'react-router-dom';
import getTypesAction from './actions/getTypes';
import { ButtonSubmit } from './components/styles/AddMovieComponent-styles';

export const LandingPage = () => {
  const [ results, setResults ] = useState();
  const [ searching, setSearching ] = useState({ name: '', year: '', type: '' });
  const [ moviesPerPage ] = useState(8);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ selected, setSelected ] = useState();
  const [ types, setTypes ] = useState()

  const changeSelected = (e) => {
      setSelected(e.target.value)
  };

  const fetchTypes = async () => {
    const res = await getTypesAction();
    setTypes(res)
  };

  useEffect(() => {
    fetchTypes()
  }, [results])

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const paginate = (number) => {setCurrentPage(number)}

  let movies
  if (results) {
    movies = results.slice(indexOfFirstMovie, indexOfLastMovie)
  }

  const onChange = (e) => {
    e.preventDefault();
    setSearching({...searching, [e.target.name]: e.target.value})
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await Search(searching)
    setResults(res)
    setCurrentPage(1)
    setSelected()
  };

  const onClick = () => {
    selected === '1' && results.sort((a, b) => a.Title.localeCompare(b.Title))
    selected === '2' && results.sort((a, b) => b.Title.localeCompare(a.Title))
    selected === '3' && results.sort((a, b) => a.Year - b.Year)
    selected === '4' && results.sort((a, b) => b.Year - a.Year)
    setSelected()
  };
console.log('searching: ', searching)
  return (
    <MainDiv>
      <PageTitle>OMDb The Open Movie Database</PageTitle>
      <SearchBar>
        <form onSubmit={onSubmit}>
           <input type='text' placeholder='search...' style={inputSearch} name='name' onChange={onChange} />
        </form>
        <label style={{color:'white'}}>Type</label>
        <select size={1} style={selectStyle} name='type' onChange={onChange}>
          {
            types && types.map((e, i) => {
              return (
                <option id={i} value={e}>{e}</option>
              )
            })
          }
          <option id='none' value=''>All Types</option>
        </select>
        <label style={{color:'white'}}>Year</label>
        <input type='number' name='year' style={selectStyle} onChange={onChange} />
        <ButtonSubmit onClick={onSubmit}>SEARCH</ButtonSubmit>
        <NavLink to='/add'>
          <ButtonSubmit>Add Movie</ButtonSubmit>        
        </NavLink>
      </SearchBar>
      <FilterCardContainer>
        <FilterSideBar selected={selected} changeSelected={changeSelected} onClick={onClick} />
        {
          results && <Cards movies={movies} />          
        }
      </FilterCardContainer>
      <Pagination results={results} moviesPerPage={moviesPerPage} paginate={paginate} />
    </MainDiv>
  );
}


import styled from 'styled-components';

export const MainDiv = styled.div`
  background-color: white;
`;

export const SearchBar = styled.div`
  background-color: #121212;
  height: 3rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const PageTitle = styled.div`
  font-weight: 800;
  color: #E6461A;
  font-size: 30px;
  margin-left: 1rem;
  margin-block: 0.5rem;
`;

export const inputSearch = {
  height: '1.5rem',
  width: '15rem',
  marginLeft: '1rem',
  marginRight: '1rem',
  borderRadius: '8px'
};

export const selectStyle = {
  height: '1.8rem',
  marginLeft: '1rem',
  marginRight: '1rem',
  borderRadius: '5px',
  cursor: 'pointer'
}

export const FilterCardContainer = styled.div`
  display: flex;
  height: 100%;
  border: 5px solid #E2B616;
`;
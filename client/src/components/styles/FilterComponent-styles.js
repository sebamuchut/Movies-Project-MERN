import styled from 'styled-components';

export const SideBarContainer = styled.div`
    width: 15rem;
    height: 80vh;
    background-color: #F1F3F4;
`;

export const FilterContainer = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
`;

export const checkboxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '50vh',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginTop: '2rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
};

export const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
};

export const buttonStyles = {
    padding: '6px',
    width: '5rem'
}
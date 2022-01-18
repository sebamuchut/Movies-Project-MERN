  import styled from "styled-components";

  export const Nav = styled.nav`
    display: flex;
    justify-content: center;
  `;

  export const mainUl = {
    display: 'flex',
    listStyleType: 'none',
    marginTop: 0
};

  export const buttonPaginate = {
    display: 'flex',
    padding: '10px'
  };
  
  export const Pagination = ({ results, moviesPerPage, paginate }) => {
    const pageNumbers = [];
    let number_of_cards = results || []



  //create page numbers
  for(let i=1; i <= Math.ceil(number_of_cards.length / moviesPerPage); i++){
    pageNumbers.push(i)
  }
  return(
  <Nav>
    <ul style={mainUl}>
      {pageNumbers.map(number=> {
        return(
        <li key={number} >
          <a onClick={() => paginate(number)} href = '#' style={buttonPaginate} >
          {number}
          </a>
        </li>)
      })}
    </ul>
 </Nav>
  )
}
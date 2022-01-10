import { useEffect, useState } from 'react';
import Search from './actions/searchAction';

const App = () => {
  const [ results, setResults ] = useState()
  const [ searching, setSearching ] = useState({name: 'avengers'})

  const callingSearch = async () => {
    let data = await Search(searching)
    data && setResults(data)
  };

  useEffect(() => {
    callingSearch();
  }, []);
  
console.log('results: ', results)
  return (
    <div>
      {
        results ?
        results.map(e => (
          console.log(e),
          <h4>{e.Title}</h4>
        ))
        : null
      }
    </div>
  );
}

export default App;

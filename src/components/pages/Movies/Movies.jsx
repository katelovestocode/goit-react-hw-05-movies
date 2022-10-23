
import { useState, useEffect} from 'react';
import { fetchSearchQuery } from "../../../utils/fetchMovies"
import { useSearchParams } from "react-router-dom";
import { ItemLink, List, SearchForm, SearchFormInput, Button } from "./Movies.styled"
import { useLocation } from "react-router-dom"


const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
    
  
  const location = useLocation();
  const [results, setResults] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [inputSearch, setInputSearch] = useState(query);
   
  
    useEffect(() => {
    if (query.trim() === '') {
      return;}
      
      setResults(null);
      setTotalResults(null);

      fetchSearchQuery(query).then(response => { return response }).then((data) => { setResults(data.results); setTotalResults(data.total_results) }).catch(error => error) }, [query])

    // SearchQuery onChange when typing in Input
    const handleInputChange = event => {
      setInputSearch(event.target.value.toLowerCase())
    };
  
    // handling Submit
    const handleSubmit = event => {
    event.preventDefault();
      const form = event.target;
      const queryNormalized = form.query.value.toLowerCase().trim(); 
      setSearchParams( {query: queryNormalized} )
  };

    return (
        <>         
        <SearchForm onSubmit={handleSubmit}>
          
          <SearchFormInput
            name="query"
            value={inputSearch}
            onChange={handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter a movie name"
            />
           
            <Button type="submit"> Search </Button> 
            </SearchForm> 
            
        {results &&
          <List> {results.map((movie) => { return (<ItemLink key={movie.id} to={`${movie.id}`} state={{ from: location }}> {movie.title ?? movie.name} </ItemLink>) })} </List>}
        {totalResults === 0 && <p> Enter Correct Movie Name </p>}

        </>
   )

}
 
export default Movies;

import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from "../../../utils/fetchMovies"
import { List, ItemLink } from "./Home.styled"
import { useLocation } from "react-router-dom"
import { Container, Title } from '../Home/Home.styled';

const Home = () => { 

    const [trendingMovies, setTrendingMovies] = useState(null); 
    const location = useLocation();

    useEffect(() => {
        fetchTrendingMovies().then(response => { return response })
            .then(movies => (setTrendingMovies(movies))).catch(error => error)
        }, [])

    return (
        <Container> <Title> Trending Movies  </Title>
        <List> 
                {trendingMovies && trendingMovies.results.map((movie) => {
                    return(<ItemLink key={movie.id} to={`movies/${movie.id}`} state={{from: location}}> {movie.title ?? movie.name} </ItemLink> )
                })}
        </List>
        
        </Container>

    )

}

export default Home;
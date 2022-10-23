
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from "../../../utils/fetchMovies"
import { Outlet, useParams } from "react-router-dom"
import { BASE_IMG_URL } from "../../../utils/base_Image_Url"
import { Container, Content, GenresContainer, NavItem, GenresTitle, GenresItem, Overview, Score, Title, Navigation, NavItemBack } from './MovieDetails.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom"
import { Suspense } from "react"



const MovieDetails = () => { 

    const location = useLocation();
    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState(null);
    const [movieScore, setMovieScore] = useState(null);
    const [movieOverview, setMovieOverview] = useState("");
    const [movieGenres, setMovieGenres] = useState([]);
    const [movieImage, setMovieImage] = useState("");
    const [movieTag, setMovieTag] = useState("");

    
        // getting movieId 
        const {movieId} = useParams();
        // console.log(movieId);

    useEffect(() => {
          
        fetchMovieDetails(movieId).then(response => { return response }).then((movie) => {
            
            setMovieTitle(movie.original_title ?? movie.title);
            setMovieYear(movie.release_date);
            setMovieScore(movie.vote_average);
            setMovieOverview(movie.overview);
            setMovieGenres(movie.genres);
            setMovieTag(movie.tagline);
            setMovieImage(BASE_IMG_URL + movie.poster_path);
        }).catch(error => onFetchError(error))
        }, [movieId])

   
    const movieYearNumber = Number.parseInt(movieYear);
    const movieScorePercentage = Number.parseInt(movieScore * 10) ;
    
    function onFetchError(error) {
    toast.error('Oops, something went wrong. Try another movie',  {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        console.log(error.message); 
}

    
    return (
        <>
            {movieId && <> <ToastContainer />
                
             <NavItemBack to={location.state?.from ?? "/movies"}> Go back </NavItemBack>

                <Container>
                <img src={movieImage} alt={movieTag} width="300" />
                    
                <Content>
                <Title> {movieTitle} ({movieYearNumber}) </Title>
                <Score> User Score: {movieScorePercentage} % </Score>
                <Title> Overview </Title>
                <Overview> {movieOverview} </Overview>
                <GenresContainer>
                    <GenresTitle> Genres: </GenresTitle>
                    {movieGenres.map((genre, index) => (<GenresItem key={index}> {genre.name} </GenresItem>))}
                </GenresContainer>
                </Content> </Container>
            
                <Navigation>
            <NavItem to="cast" key="cast"> Cast </NavItem>
            <NavItem to="reviews" key="reviews"> Reviews</NavItem>
                </Navigation>
            
            <Suspense fallback={<div> Loading... </div>}>  <Outlet /> </Suspense>
            
            </>}
        
        </>          
            
    );
}

export default MovieDetails;
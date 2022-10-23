import { useState, useEffect } from 'react';
import { fetchMovieReviews } from "../../../utils/fetchMovies"
import { useParams } from "react-router-dom"
import { Container, Title, Text } from '../Reviews/Reviews.styled';

const Reviews = () => {

    const {movieId} = useParams();
    // console.log(movieId);

    const [reviews, setReviews] = useState([]);   
   
    
    useEffect(() => {
          
        fetchMovieReviews(movieId).then(response => { return response }).then((data) => {
            setReviews(data);
        }).catch(error => error)
        }, [movieId])

    if (reviews.length === 0) {
            return <p> We don't have any reviews for this movie </p> }
    
    return (
        <>
            { reviews && <>
                <Container>
                <ul> 
                        {reviews.map((review, index) => (
                            <li key={index}> 
                            <Title> Author: {review.author} </Title>
                            <Text> {review.content} </Text> </li>))}
                </ul>
                </Container>
            </>}
        </>          
            
    );
 
}

export default Reviews;
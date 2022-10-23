
import { useState, useEffect } from 'react';
import { fetchMovieCast} from "../../../utils/fetchMovies"
import { useParams } from "react-router-dom"
import { BASE_IMG_URL } from "../../../utils/base_Image_Url"
import { Container, List, ListItem, Image, Name } from './Cast.styled';


const Cast = () => {

    const { movieId } = useParams();
    const [castCharacter, setCastCharacter] = useState([]);        
      

    useEffect(() => {
          
        fetchMovieCast(movieId).then(response => { return response }).then((movie) => {
            setCastCharacter(movie.cast)}).catch(error => error)
}, [movieId])
    
    return (<>
        {castCharacter && <Container>
            
            <List>
            {castCharacter.map((item, index) => (
            
            <ListItem key={index}>
                   {item.profile_path ? (<Image src={BASE_IMG_URL + item.profile_path} alt={item.name} width="150" />) : (<Image src="https://via.placeholder.com/150x225?text=Placeholder" alt={item.name} width="150" />)} 
            <Name>  {item.name} </Name>
            <p> Character: {item.character} </p></ListItem>
            
            ))}
                </List>
               
        </Container>}
    
    </>)

}
 
export default Cast;
import { Container } from "./styles";
import {Link} from "react-router-dom"

export function Brand (){
    return(
        <Container>
            <Link to='/'>
            <h1> Rocketmovies </h1> 
            
            </Link>
        </Container>
    )
}
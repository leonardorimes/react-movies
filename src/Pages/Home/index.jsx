import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Movie } from "../../components/Movie"
import { Button } from "../../components/Button";
import { Link } from "react-router-dom"

import {Container, Content, NewMovie } from './styles';

export function Home(){

    return (   
        
    <Container>
        

        <Header>
        </Header>

        <Content>
          
            <Section title = "Meus Filmes">
            <NewMovie>
                        <Link to='/New'>
                            <Button title="+ Adicionar Filme">

                            </Button>
                        </Link>
 
             </NewMovie>
      
            <Movie data={{
                title: "Interestellar",
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                tags: [
                    {id:'1', name: 'Ficção Cientifica' },
                    {id:'2', name: 'Drama' },
                    {id:'3', name: 'Familia' }

                ]
            }}
            />

            <Movie data={{
                title: "Interestellar",
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                tags: [
                    {id:'1', name: 'Ficção Cientifica' },
                    {id:'2', name: 'Drama' },
                    {id:'3', name: 'Familia' }

                ]
            }}
            />

        <Movie data={{
                title: "Interestellar",
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                tags: [
                    {id:'1', name: 'Ficção Cientifica' },
                    {id:'2', name: 'Drama' },
                    {id:'3', name: 'Familia' }

                ]
            }}
            />
        
        </Section>
        </Content>


    </Container>
    
    );

}
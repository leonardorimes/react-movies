import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background  } from "./style";
import { Input } from "../../components/Input"
import { Button } from '../../components/Button';
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth'

export function SignIn(){
   
    const data = useAuth();

    return(

        <Container>
            <Form>
                <h1> RocketMovies </h1>
                <p> Aplicação para acompanhar tudo que assistir. </p>

                <h2> Faça seu login </h2>
                <Input
                    placeholder="E mail"
                    type="text"
                    icon = {FiMail}
                />   

                <Input
                    placeholder="Senha"
                    type="password"
                    icon = { FiLock }
                />

                <Button title = "Entrar">
                    
                </Button>  

            <Link to="/register">
            
                Criar Conta   
            </Link>
            </Form>

            <Background />
            
        </Container>

    )
}
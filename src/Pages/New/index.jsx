import { FiArrowLeft} from 'react-icons/fi';
import { Link } from "react-router-dom";
import { Header } from  '../../components/Header';
import { Input } from  '../../components/Input';
import { Textarea } from  '../../components/Textarea';
import { MovieItem } from  '../../components/MovieItem';
import { Section } from  '../../components/Section';
import { Button } from '../../components/Button';
import { Container, Form } from "./styles";


export function New(){
    return(
        <Container>
           
            <Header />
            <main>
                <Form>
                    <header>
                    <Link to='/'>
                        <FiArrowLeft /> <span> Voltar </span> 
                    </Link> 
                        <h1> Novo filme</h1>
                    </header>

                <section>
                    <Input placeholder="Título" />
                    <Input placeholder="Sua Nota de (0 a 5)" />
                </section>
                    
                    <Textarea placeholder="Observações"/>
                    <Section title = "Marcadores">
                        <div className="tags">
                            <MovieItem value="react" />
                            <MovieItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>
                    <section>
                    <Button title="Excluir" />
                    <Button title="Salvar" />
                    </section>

                </Form>     
            </main>
        </Container>
    )
}
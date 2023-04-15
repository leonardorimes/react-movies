import { Container, Profile, Search} from './styles';
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi';
import { Brand } from "../../components/Brand"

export function Header(){
    return(
    <Container>

        <Brand />

        <Search>
            <Input placeholder="pesquisar pelo titulo" icon={FiSearch}/>
        </Search>
        <Profile to="/profile">
             <div>
                <span> Leonardo Rimes</span>
                <strong> Sair </strong>
             </div>

             <img 
            src="https://github.com/leonardorimes.png"
             alt="Foto do usuário" />
        </Profile>

    </Container>
    )
}
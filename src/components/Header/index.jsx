import { Container, Profile, Search} from './styles';
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi';
import { Brand } from "../../components/Brand";
import {useAuth} from '../../hooks/auth';
import { ButtonText } from '../ButtonText';

export function Header(){
    const { signOut } = useAuth();
    return(
    <Container>

        <Brand />

        <Search>
            <Input placeholder="pesquisar pelo titulo" icon={FiSearch}/>
        </Search>
        <Profile to="/profile">
             <div>
                <span> Leonardo Rimes</span>
             </div>
            

            
             <img 
            src="https://github.com/leonardorimes.png"
             alt="Foto do usuário" />

        </Profile>
                <ButtonText title="Sair" onClick={signOut}>  </ButtonText>

    </Container>
    )
}
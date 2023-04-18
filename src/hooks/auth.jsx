import { createContext, useContext } from "react";

export const AuthContext = createContext({});

function AuthProvider( { children } ) {
    return(
        <AuthContext.Provider value = {{ name: "Leonardo Rimes", email: "rimesleo@gmail.com"}}>
            {children} //todas as rotas

        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth}
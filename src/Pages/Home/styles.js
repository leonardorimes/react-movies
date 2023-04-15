import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px  auto auto;
    grid-template-rows: 105px 128px auto 64px;

    grid-template-areas: 
    "header header header"
    "content content content";

`;


export const Content = styled.div`

    grid-area: content;
    padding: 0 64px;
    height: 80vh;
    overflow-y: auto;

`;



export const NewMovie = styled.div`
    width: 207px;
    position: absolute;
    top: 111px;
    left: 1632px;
`;


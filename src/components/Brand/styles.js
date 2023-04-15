import styled from "styled-components";

export const Container = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;
   
> a  h1 {

    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.PINK};
}

`;
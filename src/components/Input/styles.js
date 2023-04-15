import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BLACK};
    color: ${({theme}) => theme.COLORS.GRAY};

    margin-bottom: 8px;
    border-radius: 10px;

    > input{
        height: 56px;
        width: 700px;

        padding: 12px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;


    }

    &:placeholder{
        color: ${({theme}) => theme.COLORS.GRAY};
    }

    > svg {
        margin-left: 16px;
    }

`;
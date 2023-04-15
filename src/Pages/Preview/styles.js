import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    height: 100vh;

    a {
        color: ${({ theme }) => theme.COLORS.PINK};
        
    }

     `;
    export const Content = styled.div`
    margin-top: 24px;
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;

    > .title{
        margin-top: 24px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 24px;
        
        > svg{
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > .author{
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 40px;

        img {
            border-radius: 50%;
            border: 2px solid ${({ theme }) => theme.COLORS.GRAY};
            width: 22px;
            height: auto;
        }

        svg{
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > .description{
        margin-top: 40px;
    }


`;
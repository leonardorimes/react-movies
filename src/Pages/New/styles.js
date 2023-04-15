import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    >main{
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

`;

export const Form = styled.form `
    max-width: 100%;
    margin: 10px 100px;

    > header{
        display: flex;
        flex-direction: column;
        gap: 24px;

        margin-bottom: 36px;

        a {
            font-size: 16px;
            color: ${ ( { theme } ) => theme.COLORS.PINK };
            display: flex;
            align-items: center;
        }
    }

   >:nth-child(2){
    margin-top: 20px;
    display: flex;
    gap: 40px;
   }

   >:nth-child(3){
    margin-top: 20px;
   }

   >:nth-child(4) :nth-child(2){
    background-color: ${ ( { theme } ) => theme.COLORS.DEEP_BLACK};
    padding: 10px;
    border-radius: 10px;
   }
   >:nth-child(5) {
        display: flex;
        gap: 40px;
   }

   >:nth-child(5) :nth-child(1) {
    background-color: ${ ( { theme } ) => theme.COLORS.DEEP_BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
   }

`
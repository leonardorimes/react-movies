import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLACK};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${ ( { theme } ) => theme.COLORS.WHITE };
        margin-bottom: 8px;
    }

    > p{
        margin-top: 8px;
    }

    svg {
        height: 12px;
        color: ${ ( { theme } ) => theme.COLORS.PINK };
    }

    > footer{
        width: 100%;
        display: flex;
        margin-top: 24px;
       
    }
`;
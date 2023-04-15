import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    
    align-items: center;

    background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_3};
    color: ${ ( { theme } ) => theme.COLORS.GRAY };

    border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 5px;

    > button {
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({ theme }) => theme.COLORS.BACKGROUND_2}
    }

    .button-add{
        color: ${({ theme }) => theme.COLORS.PINK}
    }

    > input{
        height: 56px;
        width: 100%;

        padding: 5px;

        color: ${({ theme }) => theme.COLORS.WHITE };
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY}
        }

    }
`;

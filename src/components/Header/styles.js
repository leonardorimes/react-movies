import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header `
        grid-area: header;
        width: 100%;
        display: flex;
        justify-content: space-between;

        padding: 0 180px;

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${( { theme } ) => theme.COLORS.GRAY};

`;

export const Profile = styled(Link)`
        display: flex;
        align-items: center;

        > img {
               width: 56px;
               height: 56px;
               border-radius: 50%;
               margin-left: 16px;
        }

        > div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
          
                line-height: 24px;

                span {
                        font-size: 14px;
                        color: ${({ theme }) => theme.COLORS.GRAY};
                }

                strong {
                        font-size: 18px;
                        color: ${({ theme }) => theme.COLORS.WHITE};
                }
        }
`;


export const Search = styled.div`
    grid-area: search;
    height: 50px;
    padding: 30px 64px 74px 0;


`;
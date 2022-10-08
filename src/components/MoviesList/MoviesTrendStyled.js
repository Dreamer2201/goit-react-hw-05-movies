import styled from 'styled-components';

const TitleTrendMovies = styled.h2`
    font-size: 28px;                                                                        
    color: #8B4513;
    text-shadow: 1px 1px 2px #BC8F8F;
    text-transform: uppercase;
`;
const TrendMovieList = styled.ul`
    margin: 0;
`;
const TrendMovieListItem = styled.li`
    padding: 0;
    margin: 0;
    line-height: 1;
`;

const BtnLoadMoreMovies = styled.button`
    background-color: #F4A460;
    border-radius: 12px;
    border: transparent;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 15px;
    text-align: center;
    transition: 200ms;
    width: 150px;

    &:hover,
    &:focus {
        outline: 0;
        border-color: #808080;
        background: #BC8F8F;
        box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}`
export { TitleTrendMovies, BtnLoadMoreMovies, TrendMovieList, TrendMovieListItem };
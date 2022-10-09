import styled from 'styled-components';

const WrapperDetailsInfMovie = styled.div`
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
`;
const BtnGoBack = styled.button`
    margin: 10px 10px;
    background-color: #F4A460;
    border-radius: 12px;
    border: transparent;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 5px 10px;
    text-align: center;
    transition: 200ms;
    width: 100px;

    &:hover,
    &:focus {
        outline: 0;
        border-color: #808080;
        background: #BC8F8F;
        box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}`;

const ContainerInfMovie = styled.div`
    margin-left: 10px;
`;
const YearReleseMovie = styled.span`
    margin-left: 5px;
    font-weight: bold;
    font-size: 22px;
`;
const TitleHeadDetails = styled.h3`
    padding: 0;
    margin: 0;
`;
const TitleWrapper = styled.div`
    display:flex;
    align-items: baseline;
`;

const GenresWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const GenreName = styled.p`
    padding: 0;
    margin-right: 10px;

`;

export { WrapperDetailsInfMovie, BtnGoBack, ContainerInfMovie, YearReleseMovie, TitleHeadDetails, TitleWrapper, GenresWrapper, GenreName  };
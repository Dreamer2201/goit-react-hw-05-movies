import styled from 'styled-components';

const AlertEnterQuery = styled.p`
    text-align: center;
    font-size: 22px;
    font-style: italic;
`;
const SearchForm = styled.form`
    font-size: 22px;
    text-align: center;
`;

const InputForm = styled.input`
    padding: 5px;
    font-size: 22px;
    border-radius: 10px;
`;
const ButtonForm = styled.button`
    margin-left: 15px;
    background-color: grey;
    color: black;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
`;

export { SearchForm, InputForm, ButtonForm, AlertEnterQuery};
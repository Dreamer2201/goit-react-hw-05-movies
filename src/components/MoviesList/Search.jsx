import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, InputForm, ButtonForm } from './MovieGalleryStyled';

export default function Search({ onSubmit }) {
    const [searchName, setSearchName] = useState('');
   
    const hendleChangeInputSearch = (e) => {
        const { value } = e.target;
        setSearchName(value);
    }
    const hendleSubmitSearchForm = (e) => {
        e.preventDefault();
        if (searchName.trim() === '') {
            alert("Enter your request, please!");
        }
        onSubmit(searchName);
         setSearchName('');
    }
    
    return (
        <header>
            <SearchForm onSubmit={hendleSubmitSearchForm}>                
                <InputForm
                onChange={hendleChangeInputSearch}
                name="searchName"
                value={searchName}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
                <ButtonForm type="submit" className="button">
                    <span>Search</span>
                </ButtonForm>
            </SearchForm>
        </header>)
}
    
Search.propTypes = {
    onSubmit:  PropTypes.func.isRequired,
}
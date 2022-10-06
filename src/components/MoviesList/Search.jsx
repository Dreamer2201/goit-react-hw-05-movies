import { useState } from 'react';

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
            <form onSubmit={hendleSubmitSearchForm}>                
                <input
                onChange={hendleChangeInputSearch}
                name="searchName"
                value={searchName}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
                <button type="submit" className="button">
                    <span>Search</span>
                </button>
            </form>
        </header>)
    }
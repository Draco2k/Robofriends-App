import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue tc br3' 
            type='search' 
            placeholder='Give me a name!'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
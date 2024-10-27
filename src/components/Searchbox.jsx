import React, { useState } from 'react';
import searchIcon from '../assets/Search.png'

const Searchbox = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Search term:', searchTerm);
    };
  
    return (
        <>
            <div className="search">
                <img src={searchIcon} className="searchIcon" alt="Search Icon"/>
                <input type="text" name="search" className="round" placeholder='Search'/> 
            </div>
        </>
    );
    
}

export default Searchbox

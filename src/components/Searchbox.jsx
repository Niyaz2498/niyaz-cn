import React, { useState } from 'react';
import searchIcon from '../assets/Search.png'

const Searchbox = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle search logic here,  e.g., make an API call
      console.log('Search term:', searchTerm);
    };
  
    return (
        <>
        <div className="searchLeftCurve"></div>
        <img src={searchIcon} alt="Search Icon"/>
        <input type="text" />
        <div className="searchRightCurve"></div>
      </>
    );
  
}

export default Searchbox

import React from 'react';
import Card from '../../Components/Card';
import "./style.css"
import API_RESULT from './../../constants'; 
import Filter from '../../Components/Filter';
import Toggle from '../../Components/Toggle';

function LandingPage(){
    const { data } = API_RESULT;

    return (
        <>
        <Toggle />
        <Filter />
        <div className='card-container'>
        {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
        </div>
        </>
    )
}

export default LandingPage;
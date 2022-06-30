import React from 'react';
import './CountryInfo.css';

const CountryInfo = props => {
    return <p className={`${props.className}`}><b className='name-info'>{props.name}:</b>{props.info}</p>
};

export default CountryInfo;
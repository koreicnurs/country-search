import React from 'react';

const CountryInfo = props => {
    return <p className={`${props.className}`}><b className='name-info'>{props.name}:</b>{props.info}</p>
};

export default CountryInfo;
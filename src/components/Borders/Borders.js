import React from 'react';
import './Borders.css';

const Borders = ({border}) => {
    return (
        <div className='borders'>
            <ul>
                <li>{border}</li>
            </ul>
        </div>
    );
};

export default Borders;
import React from 'react';

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
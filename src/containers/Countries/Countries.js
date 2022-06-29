import React, {useEffect, useState} from 'react';
import axios from "axios";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const url = 'https://restcountries.com/v2/all';

    useEffect(() => {
        const getAllCountries = async () => {
            const response = await axios(url);
            const allCountries = response.data
            setCountries(allCountries)
        }
        getAllCountries()
    }, [])
    // console.log(countries);


    return (
        <>
            <div className='countries'>
                {countries.map(c => {
                    return <p key={c.name} onClick={() => fetchDataCointry(c.name)}>{c.name}</p>
                })}
            </div>
            <div>
                {country.map(m => {
                    console.log(m);
                })}
            </div>
        </>

    );
};

export default Countries;
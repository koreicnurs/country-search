import React, {useEffect, useState} from 'react';
import axios from "axios";
import Country from "../../components/Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)

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
                    return <p key={c.name} onClick={() => setSelectedCountry(c.name)}>{c.name}</p>
                })}
            </div>
            <Country
                nameId={selectedCountry}
            />
        </>

    );
};

export default Countries;
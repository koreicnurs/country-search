import React, {useCallback, useEffect} from 'react';
import {useState} from "react";
import axios from "axios";

const Country = ({nameId}) => {
    const [country, setCountry] = useState(null);
    const [countryBorders, setCountryBorders] = useState(null);

    const fetchDataCountry = useCallback(async () => {
        if (nameId !== null) {
            const resp = await axios(`https://restcountries.com/v2/name/${nameId}`);
            setCountry(resp.data);
            setCountryBorders(resp.data[0].borders);
            // resp.data[0].borders.map(async (b) => {
            //     const r = await axios(`https://restcountries.com/v2/alpha/${b}`);
            //     setBorders(r.data);
            // });
        }
    }, [nameId]);

    useEffect( () => {
        fetchDataCountry().catch();
    }, [fetchDataCountry]);

    console.log(countryBorders);

    const getBordersName = () => {
        countryBorders.map(async (b) => {
            console.log(b);
            const r = await axios(`https://restcountries.com/v2/alpha/${b}`);
            console.log(r.data);
        });
    };

    return country &&(
        <div className='country'>
            <h1>{country[0].name}</h1>
            <p>{country[0].capital}</p>
            <p>{country[0].region}</p>
            <p>{country[0].subregion}</p>
            <p>{country[0].languages[0].name}</p>
            <p>{country[0].area}</p>
            <p>{country[0].population}</p>
            <img style={{width: "300px", height: "auto"}} src={country[0].flag} alt=""/>
            <div>
                {getBordersName()}
            </div>
        </div>
    );
};

export default Country;
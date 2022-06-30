import React, {useCallback, useEffect} from 'react';
import {useState} from "react";
import CountryInfo from "../CountryInfo/CountryInfo";
import axios from "axios";
import Borders from "../Borders/Borders";

const Country = ({nameId}) => {
    const [country, setCountry] = useState(null);
    const [countryBorders, setCountryBorders] = useState(null);

    const fetchDataCountry = useCallback(async () => {

        if (nameId !== null) {
            const resp = await axios(`https://restcountries.com/v2/name/${nameId}`);
            const borders = await  Promise.all(resp.data[0]['borders'].map(async (b) => {
                const border = await axios(`https://restcountries.com/v2/alpha/${b}`);
                return border.data.name;
            }));

            setCountry(resp.data);
            setCountryBorders(borders);
        }
    }, [nameId]);

    useEffect(() => {
        fetchDataCountry().catch();
    }, [fetchDataCountry]);

    return country && countryBorders &&(
        <div className='country'>
            <h1>{country[0]['name']}</h1>
            <CountryInfo
                className='capital'
                name='Capital'
                info={country[0]['capital']}
            />
            <CountryInfo
                className='region'
                name='Region'
                info={country[0]['region']}
            />
            <CountryInfo
                className='subregion'
                name='Subregion'
                info={country[0]['subregion']}
            />
            <CountryInfo
                className='name'
                name='Language'
                info={country[0].languages[0]['name']}
            />
            <CountryInfo
                className='area'
                name='Area'
                info={country[0]['area']}
            />
            <CountryInfo
                className='population'
                name='Population'
                info={country[0]['population']}
            />
            <img style={{width: "300px", height: "auto"}} src={country[0]['flag']} alt=""/>
            <div>
                <h4>Bordering with:</h4>
                {countryBorders.map(b => (
                    <Borders
                        key={b}
                        border={b}
                    />
                ))}
            </div>
        </div>
    );
};

export default Country;
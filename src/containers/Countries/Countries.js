import React, {useEffect, useState} from 'react';
import axios from "axios";
import Country from "../../components/Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [error, setError] = useState(null);

    const url = 'https://restcountries.com/v2/all';

    useEffect(() => {
        const getAllCountries = async () => {
            try {
                const response = await axios(url);
                const allCountries = response.data;
                setCountries(allCountries);
            } catch (e) {
                setError(e.message);
            }
        }
        getAllCountries().catch()
    }, [])

    return (
        <>
            {error ?
                <div className='error'>
                    {error}
                </div> :
                null
            }
            <div className='countries-block'>
                <h2>Countries</h2>
                <ul className="list-group countries">

                    {countries.map(c => (
                            <a href="#" className="list-group-item list-group-item-action" key={c.name}
                               onClick={() => setSelectedCountry(c.name)}>{c.name}</a>
                        )
                    )}
                </ul>
            </div>

            <Country
                nameId={selectedCountry}
            />
        </>

    );
};

export default Countries;
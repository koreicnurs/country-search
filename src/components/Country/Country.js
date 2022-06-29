import React from 'react';
import {useState} from "react";
import axios from "axios";

const Country = () => {
    const [country, setCountry] = useState(null);

    const fetchDataCointry = async (name) => {
        const resp = await axios(`https://restcountries.com/v2/name/${name}`);
        setCountry(resp.data)
    }


    return (
        <div>

        </div>
    );
};

export default Country;
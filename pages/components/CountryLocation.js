"use client"
import React, {useState, useEffect} from 'react'

const CountryLocation = ()=> {

    const [country, setcountry] = useState("")

    // get ip country name
    useEffect(() => {
        fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_LOCATION_API_KEY}`)
        .then(res => res.json())
        .then(data => setcountry(data.country))
    }, [])

    return (
    <div>{country}</div>
  )
}

export default CountryLocation;

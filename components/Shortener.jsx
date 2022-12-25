import React, { useState } from 'react';
import axios from 'axios';

const Shortener = () => {
    let [tinyURL, setTinyURL] = useState("");

    const handleClick = () => {
        const url = document.getElementById("url").value;
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

        let data = JSON.stringify({url : url});
        
        axios.post("https://api.tinyurl.com/create", data, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => {
            console.log(response);
            setTinyURL(response["data"]["data"]["tiny_url"]);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
            <div className="relative">
                <input type="text" id="url" className="block bg-gray-50 border p-1 w-full z-20 rounded-l-lg focus:outline-none px-6" placeholder="Enter URL here..." required></input>
                <button type="submit" onClick={handleClick} className="absolute top-0 right-0 bg-blue-700 text-white border border-blue-700 rounded-r-lg p-1 px-2 focus:outline-none">Shorten</button>
            </div>
            <br></br>
            { tinyURL }
        </>
    );
};

export default Shortener;
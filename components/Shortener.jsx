import React, { useState } from 'react';

const Shortener = () => {
    let [tinyURL, setTinyURL] = useState("");

    const handleClick = () => {
        const url = document.getElementById("url").value;
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
        const response = fetch("https://api.tinyurl.com/create", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({url: url}),
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setTinyURL(data["data"]["tiny_url"]);
        })
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
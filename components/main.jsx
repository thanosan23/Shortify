import React from 'react';
import Shortener from './Shortener';

const Main = () => {
    return (
        <>
            <div className="my-20 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold">
                    Shortify 
                </h1>
                <p className="text-2xl p-5">A URL Shortener</p>
                <Shortener />
            </div>
        </>
    );
}

export default Main;
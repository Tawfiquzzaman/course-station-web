import React from 'react';
import error from '../assets/animation/error.json'
import Lottie from 'lottie-react';
import Navbar from '../Shared/Navbar';

const Error = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            <Lottie className='w-200 flex mx-auto' loop={true} animationData={error}></Lottie>
        </div>
        </div>
    );
};

export default Error;
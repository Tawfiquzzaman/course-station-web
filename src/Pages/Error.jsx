import React from 'react';
import error from '../assets/animation/error.json'

const Error = () => {
    return (
        <div>
            <div>
            {/* <Navbar></Navbar> */}
            <Lottie loop={true} animationData={error}></Lottie>
        </div>
        </div>
    );
};

export default Error;
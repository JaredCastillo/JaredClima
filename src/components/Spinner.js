import React from 'react';
import '../components/Spinner.css';

const Spinner = () => {

    return(
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    );
}

export default Spinner;
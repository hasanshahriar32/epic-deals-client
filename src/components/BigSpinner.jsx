import React from 'react';
import './bigSpinnerStyle.css'

const BigSpinner = () => {
    return (
        <div>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default BigSpinner;
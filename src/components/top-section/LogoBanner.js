import React from 'react';

const LogoBanner = props => {

    return (
        <div className="d-flex logo-container">            
                <img className="logo-img" src={props.image} />
                <div className="logo-info d-flex flex-column justify-content-between">
                    <div className="logo-description">{props.description}</div>
                    {props.children}
                </div>           
        </div>
        
    )
}
export default LogoBanner
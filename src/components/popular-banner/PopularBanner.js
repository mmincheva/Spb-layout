import React from 'react';


const PopularBanner = props => {

    return (
        <div className="popular-banner align-items-center">
            <div className="popular-info d-sm-flex align-items-center">
                <img className="img-fluid popular-image" src={props.image} />
                <div className="popular-title d-flex">{props.title}</div>
                {props.children}
            </div>
        </div>
    )
}
export default PopularBanner
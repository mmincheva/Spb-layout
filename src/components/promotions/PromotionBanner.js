import React from 'react';

const PromotionBanner = props => {

    return (
        <div className="promo-banner">
            <div className="row">
                <div className="col promotion-content">
                <div className="popular">Blackjack Master</div>
                <div className="promo-description">Win 8 hands in a row in Blackjack and claim 200 mBTC cash prize!</div>
                </div>
                <div className="col">
                <img className="promo-image" src={props.image}/>
                </div>
            </div>

        </div>
    )
}
export default PromotionBanner
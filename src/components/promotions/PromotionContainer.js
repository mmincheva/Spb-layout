import React from 'react';
import PromotionBanner from './PromotionBanner';

const PromotionContainer = props => {

    return (
        <div className="promo-container d-flex">
            <PromotionBanner
                image={"https://images.pexels.com/photos/2631067/pexels-photo-2631067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}>
            </PromotionBanner>
            <PromotionBanner
                image={"https://images.pexels.com/photos/2631067/pexels-photo-2631067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}>
            </PromotionBanner>
        </div>
    )
}
export default PromotionContainer
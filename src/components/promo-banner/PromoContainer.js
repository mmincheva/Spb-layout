import React from 'react';
import PromoBanner from './PromoBanner';

const PromoContainer = props => {

    return (
        <div className="promo-container d-flex">
            <PromoBanner
                title={"Sports"}
                description={"Price Boost every day on all sports"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/card-sports3.png"}>
                <a className="btns btn-full promo-button" href="#">Go to sports</a>
            </PromoBanner>
            <PromoBanner
                title={"Casino"}
                description={"Offering the best slots and live dealer games"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/card-casino4.png"}>
                <a className="btns btn-full promo-button" href="#">Go to casino</a>
            </PromoBanner>

        </div>
    )
}
export default PromoContainer
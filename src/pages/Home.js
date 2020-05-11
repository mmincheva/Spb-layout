import React from 'react';

import LogoContainer from '../components/top-section/LogoContainer';
import LoginButtons from '../components/top-section/LoginButtons';
import PromoContainer from '../components/promo-banner/PromoContainer';
import PopularContainer from '../components/popular-banner/PopularContainer';
import PromotionContainer from '../components/promotions/PromotionContainer';
import Footer from '../components/footer/Footer';


class Home extends React.Component {

    render() {
        return <>
            <div className="row">
                <div className="col-md-8">
                    <LogoContainer />
                </div>
                <div className="col-md-4">
                    <LoginButtons />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <PromoContainer />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="popular">Popular</div>
                    <PopularContainer />
                </div>
            </div>
            <div className="row promos">
                <div className="col">
                    <div className="popular">Exciting promotions start here</div>
                    <PromotionContainer />
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>

        </>

    }
}

export default Home;
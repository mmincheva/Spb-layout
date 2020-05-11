import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (<div className="footer-row d-flex flex-row bd-highlight mb-3">
            <div className="col-2">
                <img className="footer-logo" src="https://www.sportwetten24.com/wp-content/uploads/2018/10/sportsbetio_logo_review.png"></img>
                <div className="footer-logo-text">
                    Sportsbet.io is owned and operated by mBet Solutions NV (Kaya Richard J. Beaujon Z/N Landhuis Joonchi II Curaçao). It is licensed and regulated by the Government of Curaçao under the gaming license 1668/JAZ. The site is powered by the Coingaming.io Bitcoin Sports and Casino Gaming platform, and allows players to play with EUR and Bitcoins. The site is not an exchange and funds can not be converted from euros to bitcoins.
            </div>
            </div>
            <div className="col-2">
                <div className="footer-headertext">Sports</div>
                <div className="footer-text">
                    <div> <a className="footer-links" href="#">Promotions</a></div>
                    <div> <a className="footer-links" href="#">In play</a></div>
                    <div> <a className="footer-links" href="#">Upcoming</a></div>
                </div>

            </div>

            <div className="col-2">
                <div className="footer-headertext">Casino</div>
                <div className="footer-text">
                    <div> <a className="footer-links" href="#">Live Casino</a></div>
                </div>
            </div>

            <div className="col-2">
                <div className="footer-headertext">Support</div>
                <div className="footer-text">
                    <div> <a className="footer-links" href="#">Payment Options</a></div>
                    <div> <a className="footer-links" href="#">Responsible Gambling</a></div>
                    <div> <a className="footer-links" href="#">FAQ</a></div>
                    <div> <a className="footer-links" href="#">General Betting Rules</a></div>
                    <div> <a className="footer-links" href="#">Responsible Gambling Terms and Conditions</a></div>
                    <div> <a className="footer-links" href="#">Affiliate FAQ</a></div>
                    <div><a className="footer-links" href="#">Sportsbet Market Explanations</a></div>
                </div>
            </div>

            <div className="col-2">
                <div className="footer-headertext">About</div>
                <div className="footer-text">
                    <div> <a className="footer-links" href="#">Privacy Policy</a></div>
                    <div> <a className="footer-links" href="#">About Us</a></div>
                    <div> <a className="footer-links" href="#">Terms and Conditions</a></div>
                    <div> <a className="footer-links" href="#">Affiliates</a></div>
                    <div> <a className="footer-links" href="#">Affiliate Terms and Conditions</a></div>
                    <div> <a className="footer-links" href="#">Bug Bounty Program</a></div>
                </div>
            </div>

            <div className="col-2">
                <div className="footer-headertext">Follow us</div>
                <div className="footer-text">
                    <div className="footer-icons">
                        <img className="img-fluid" src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"></img>
                    </div>
                    <div className="footer-icons">
                        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/768px-Facebook-icon-1.png"></img>
                    </div>
                    <div className="footer-icons">
                        <img className="img-fluid" src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721679-youtube_108064.png"></img>

                    </div>
                    <div className="footer-icons">
                        <img className="img-fluid" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/bitcoin-icon.png"></img>
                    </div>
                    <div className="footer-icons">
                        <img className="img-fluid" src="https://cdn2.iconfinder.com/data/icons/cv-curriculum-vitae/100/set_cv3ok-07-512.png"></img>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;
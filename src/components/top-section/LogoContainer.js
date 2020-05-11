import React from 'react';
import LogoBanner from './LogoBanner';


const LogoContainer = props => {

    return (
        <>
            <div className="d-flex main-section">
                <LogoBanner
                    image={"https://www.kindpng.com/picc/m/237-2373150_clip-art-red-ball-logo-red-soccer-ball.png"}
                    description={"Main Club Partner"}>
                </LogoBanner>
                <LogoBanner
                    image={"https://www.kindpng.com/picc/m/237-2373150_clip-art-red-ball-logo-red-soccer-ball.png"}
                    description={"Main Club Partner"}>
                </LogoBanner>

            </div>
            
        </>
    )
}
export default LogoContainer;
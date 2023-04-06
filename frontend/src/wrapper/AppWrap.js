import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

// The AppWrap component is a higher order component that wraps a specific section
const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>

            {/* Wrapping up our social media icons */}
            <SocialMedia />
            <div className="app__wrapper app__flex">

                {/* This a specific section */}
                <Component />

                <div className="copyright">
                    <p className="p-text">@2023 MICHAEL</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    );
};

export default AppWrap;
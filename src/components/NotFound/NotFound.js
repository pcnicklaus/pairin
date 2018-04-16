import React from 'react';
import Icon from '../../images/logo.svg';
import HeaderLogo from '../../images/icons/person_white.svg';
import './NotFound.css'


const NotFound = () => {
    return(
        <div className="NotFound">
            <nav className="NotFound__nav">
                <svg className="NotFound__nav-logo" width="60px" height="60px" x="0px" y="0px" viewBox="-275 367 60 60" enableBackground="new -275 367 60 60" >
                    <path id="Shape" className="st0" d="M-245.2,397.8c-8.6,0-15.6,7-15.6,15.6v0.5c4.1,3.8,9.6,6.1,15.6,6.1s11.5-2.3,15.6-6.1v-0.5
                        C-229.6,404.8-236.6,397.8-245.2,397.8L-245.2,397.8z"></path>
                    <ellipse id="Oval" className="st0" cx="-244.7" cy="387.6" rx="8.6" ry="8.6"></ellipse>
                    <path className="st1" d="M-215,397.4c0-0.1,0-0.3,0-0.4c0-16.6-13.4-30-30-30c-0.1,0-0.1,0-0.2,0l0,4.2c0.1,0,0.1,0,0.2,0
                        c14.2,0,25.8,11.6,25.8,25.8c0,0.1,0,0.3,0,0.4L-215,397.4z"></path>
                    <path className="st2" d="M-219.2,397.4c-0.2,14.1-11.7,25.4-25.8,25.4c-14.2,0-25.8-11.6-25.8-25.8c0-14.2,11.4-25.7,25.6-25.8l0-4.2
                        c-16.5,0.1-29.8,13.5-29.8,30c0,16.6,13.4,30,30,30c16.4,0,29.8-13.2,30-29.6L-219.2,397.4z"></path>
                    <path className="st3" d="M-215,396.6c-0.2-16.2-13.2-29.2-29.4-29.6l0,4.2c13.8,0.3,24.9,11.5,25.2,25.4L-215,396.6z"></path>
                </svg>
                <h6 className="NotFound__nav-pairin">pairin</h6>
                <h3 className="NotFound__nav-personal">personal</h3>
            </nav>
            <div className="NotFound__content">
                <svg className="NotFound__content-icon" x="0px" y="0px" viewBox="0 0 100 96" enableBackground="new 0 0 100 96">
                    <path d="M50,5C25.2,5,5,25.2,5,50s20.2,45,45,45s45-20.2,45-45S74.8,5,50,5z M50,85c-19.3,0-35-15.7-35-35s15.7-35,35-35   s35,15.7,35,35S69.3,85,50,85z"/><rect x="45" y="25" width="10" height="35"/><rect x="45" y="65" width="10" height="10"/>
                </svg>
                <h3 className="NotFound__content-404">404</h3>
                <h6 className="NotFound__content-body">Page Not Found</h6>
            </div>
        </div>
    )
}

export default NotFound;
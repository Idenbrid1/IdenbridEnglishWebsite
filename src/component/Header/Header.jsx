import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import loadjs from 'loadjs';
import './Header.css'
class Header extends React.Component {
    state = {}
    componentDidMount(){
        loadjs('/assets/js/jquery.min.js');
        loadjs('/assets/js/scripts-main.js');
      }

    render() {
        return (
            <Fragment>
                <header>
                    <Link className="logo" to='/'>
                        {/* <span>IdenBrid</span> */}
                        <img className="white-logo" style={{width:'50px',display:'none'}} src="/assets/img/fav-teal.png" alt="" />
                        <img className="black-logo" style={{width:'50px',}} src="/assets/img/fav-black.png" alt="" />
                        <figure className="logo-text" style={{ backgroundImage: "url('/assets/img/logo/white-logo-tagline.svg')" }}></figure>
                        <figure className="logo-text logo-text-mobile" style={{ backgroundImage: "url('/assets/img/black-text-logo.png')", }}></figure>
                    </Link>
                    <div className="toggle-menu">menu<span><span className="middle"></span></span></div>
                    <div className="scroll-indicator"><span className="scroll-progress"></span>Scroll</div>
                </header>
                {/* <!-- side-right-top-navigation *idenbrid* --> */}
                <ul className="social">
                    <li className="social-link"><a rel="noreferrer" href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                    <li className="social-link"><a rel="noreferrer" href="https://twitter.com/" target="_blank">Twitter</a></li>
                    <li className="social-link"><a rel="noreferrer" href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                    <li className="social-link"><a rel="noreferrer" href="https://www.linkedin.com/" target="_blank">Linkedin</a></li>
                </ul>
                <div className="nav">
                    <div className="nav-inner">
                        <nav className="nav-primary">
                            {/* figure all background onmouseenter target background-images *idenbrid*  */}
                            <figure className="menu-item-image idenbrid_menu_item_1" style={{ backgroundImage: "url(/assets/img/abouts.jpg)" }}></figure>
                            <figure className="menu-item-image idenbrid_menu_item_2" style={{ backgroundImage: "url(/assets/img/solutions.jpg)" }}></figure>
                            <figure className="menu-item-image idenbrid_menu_item_3" style={{ backgroundImage: "url(/assets/img/experience.jpg)" }}></figure>
                            <figure className="menu-item-image idenbrid_menu_item_4" style={{ backgroundImage: "url(/assets/img/client.jpg)" }}></figure>
                            <figure className="menu-item-image idenbrid_menu_item_6" style={{ backgroundImage: "url(/assets/img/careers.jpg)" }}></figure>
                            <figure className="menu-item-image idenbrid_menu_item_7" style={{ backgroundImage: "url(/assets/img/contact.jpg)" }}></figure>
                            <figure className="menu-item-image idenbrid_menu_item_8" style={{ backgroundImage: "url(/assets/img/privacypolicy.jpg)" }}></figure>
                            {/* <!-- figure all background on-mouse-enter target background-images end *idenbrid* --> */}

                            {/* <!-- menu-main-menu on-mouse-click target go to there pages+url *idenbrid* --> */}
                            <div className="menu-main-menu-container">
                                <ul id="menu-main-menu" className="primary-nav">
                                    {/* <!-- idenbrid_menu_item_1 *idenbrid*--> */}
                                    <li className="menu-item  menu-item-object-page">
                                        <Link to="/about">About
                                            <span className="menu-item-no">01</span>
                                            <span className="menu-title" data-item="idenbrid_menu_item_1">Everything you need to know about us</span>
                                            <figure className="menu-item-image" style={{ backgroundImage: "url('/assets/img/abouts.jpg')" }}></figure>
                                        </Link>
                                    </li>
                                    {/* <!-- idenbrid_menu_item_2 *idenbrid*--> */}

                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-categories">
                                        <Link to="/solutions">Solutions
                                            <span className="menu-item-no">02</span><span className="menu-title" data-item="idenbrid_menu_item_2">Our homegrown in-house products </span>
                                            <figure className="menu-item-image" style={{ backgroundImage: "url('/assets/img/solutions.jpg')" }}></figure>
                                        </Link>
                                    </li>
                                    {/* <!-- idenbrid_menu_item_3 *idenbrid*--> */}

                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-categories">
                                        <Link to="/experiences">Experiences
                                            <span className="menu-item-no">03</span>
                                            <span className="menu-title" data-item="idenbrid_menu_item_3">Our services </span>
                                            <figure className="menu-item-image" style={{ backgroundImage: "url('/assets/img/experience.jpg')" }}></figure>
                                        </Link>
                                    </li>
                                    {/* <!-- idenbrid_menu_item_4 *idenbrid*--> */}

                                    <li className="menu-item _archive menu-item-object-projects">
                                        <Link to="/clients">Clients
                                            <span className="menu-item-no">04</span>
                                            <span className="menu-title" data-item="idenbrid_menu_item_4">The big guys </span>
                                            <figure className="menu-item-image" style={{ backgroundImage: "url('/assets/img/client.jpg')" }}></figure>
                                        </Link>
                                    </li>
                                    {/* <!-- idenbrid_menu_item_6 *idenbrid*--> */}
                                    <li className="menu-item  menu-item-object-page">
                                        <Link to="/careers">Careers
                                            <span className="menu-item-no">06</span>
                                            <span className="menu-title" data-item="idenbrid_menu_item_6">Idenbrid is the place to be </span>
                                            <figure className="menu-item-image" style={{ backgroundImage: "url('/assets/img/careers.jpg')" }}></figure>
                                        </Link>
                                    </li>
                                    {/* <!-- idenbrid_menu_item_7 *idenbrid*--> */}
                                    <li className="menu-item  menu-item-object-page">
                                        <Link to="/contact">Contact
                                            <span className="menu-item-no">07</span>
                                            <span className="menu-title" data-item="idenbrid_menu_item_7">We love a good chin-wag</span>
                                            <figure className="menu-item-image" style={{ backgroundImage: "url('/assets/img/contact.jpg')" }}></figure>
                                        </Link>
                                    </li>
                                    <li className="menu-item  menu-item-object-page">
                                        <Link to="/privacy-policy">Privacy Policy
                                            <span className="menu-item-no">08</span>
                                            <span className="menu-title" data-item="idenbrid_menu_item_8">The boring stuff</span>
                                            <figure className="menu-item-image" style={{ backgroundImage: "url('/assets/img/privacypolicy.jpg')" }}></figure>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- menu-main-menu on-mouse-click target go to there pages+url end *idenbrid* --> */}
                            {/* <div className="menu-secondary-nav-container">
                                <ul id="menu-secondary-nav" className="secondary-nav">
                                    <li className="menu-item  menu-item-object-page">
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div> */}
                        </nav>
                    </div>
                </div>
            </Fragment>

        );
    }
}

export default Header;
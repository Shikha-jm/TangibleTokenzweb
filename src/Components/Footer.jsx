import { React, useState } from 'react';
import { Link, render, useNavigate } from 'react-router-dom';
import SlideToggle from "react-slide-toggle";
import sitelogo from '../Assets/Images/sitelogo.png';
import 'antd/dist/antd.css';
import { Input, Button, } from 'antd';
import tshirt from '../Assets/Images/t-shirt.jpg';
import hoodie from '../Assets/Images/hoodie.jpg';
import ladiestshirt from '../Assets/Images/ladies-t-shirt.jpg';
import mug from '../Assets/Images/mug.jpg';
import footerBottom from '../Assets/Images/footer-bottom.png'

function Footer() {
    const navigate = useNavigate();
    const [isActive, setActive] = useState("false");
    const [isActive1, setActive1] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
    const handleToggle1 = () => {
        setActive1(!isActive1);
    };

    return (
        <>
            <footer>
                <div className='container-wrap'>
                    <div className='footer-row row'>
                        <div className='foot-logo show-on-mobile'>
                            <Link to="/"><img src={sitelogo} alt="sitelogo" /></Link>
                        </div>
                        <div className='col-md-6 main-foot-col'>
                            <h5>ENTER YOUR EMAIL TO RECEIVE 10% OFF</h5>
                            <div className='foot-form'>
                                <Input.Group compact>
                                    <Input type="email" placeholder="Type Your Email Here" />
                                    <Button type="primary">GIVE ME 10% OFF</Button>
                                </Input.Group>
                            </div>
                            <div className='popular-items pt-4'>
                                <h5>POPULAR ITEMS</h5>
                                <div className='all-popular-item row'>
                                    <div className='item_popular col-md-3 col-6' >
                                        <div className='inn-wrap-item' onClick={() => navigate("product/1")}>
                                            <img src={tshirt} alt="tshirt" />
                                            <span>T-Shirt</span>
                                        </div>
                                    </div>
                                    <div className='item_popular col-md-3 col-6'>
                                        <div className='inn-wrap-item' onClick={() => navigate("product/3")}>
                                            <img src={hoodie} alt="hoodie" />
                                            <span>Hoodie</span>
                                        </div>
                                    </div>
                                    <div className='item_popular col-md-3 col-6'>
                                        <div className='inn-wrap-item' onClick={() => navigate("product/2")}>
                                            <img src={ladiestshirt} alt="ladiestshirt" />
                                            <span>Ladies T-Shirt</span>
                                        </div>
                                    </div>
                                    <div className='item_popular col-md-3 col-6'>
                                        <div className='inn-wrap-item' onClick={() => navigate("product/4")}>
                                            <img src={mug} alt="mug" />
                                            <span>Mug</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 main-foot-col'>
                            <div className='footer-menus'>
                                <SlideToggle
                                    duration={400}
                                    noDisplayStyle={true}
                                    collapsed={true}
                                    render={({ onToggle, setCollapsibleElement }) => (
                                        <div className={isActive ? "my-collapsible menu-foot" : "show my-collapsible menu-foot"}>
                                            <span onClick={handleToggle}><h5 className="my-collapsible__toggle" onClick={onToggle}>Menu<i className="fa fa-angle-down mobile-arr" aria-hidden="true"></i></h5></span>
                                            <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                                <ul>
                                                    <li><Link to="/catalog">Catalog</Link></li>
                                                    <li><Link to="/aboutus">About Us</Link></li>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li> <Link to="/search">Search</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                />
                                <SlideToggle
                                    duration={400}
                                    noDisplayStyle={true}
                                    collapsed={true}
                                    render={({ onToggle, setCollapsibleElement }) => (
                                        <div className={isActive1 ? "my-collapsible menu-foot" : "show my-collapsible menu-foot"}>
                                            <span onClick={handleToggle1}><h5 className="my-collapsible__toggle" onClick={onToggle}>Important Info<i className="fa fa-angle-down mobile-arr" aria-hidden="true"></i></h5></span>
                                            <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                                <ul>
                                                    <li><Link to="/contactus">Contact Us</Link></li>
                                                    <li><Link to="/refundpolicy">Refund Policy</Link></li>
                                                    <li><Link to="/tos">TOS</Link></li>
                                                    <li> <Link to="/privacypolicy">Privacy Policy</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                />

                            </div>
                            <div className='foot-logo hide-on-mobile'>
                                <Link to="/"><img src={sitelogo} alt="sitelogo" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='foot-bottom text-center'>
                        <p className='copy-right-txt'>Copyright © 2022 Tangible Tonkenz .All Rights Reserved</p>
                        <img src={footerBottom} alt="footerBottom" />
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
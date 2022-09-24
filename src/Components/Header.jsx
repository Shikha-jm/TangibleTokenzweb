import { React, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import sitelogo from '../Assets/Images/sitelogo.png';
import SearchBar from './SearchBar';


function Header() {
    const state = useSelector((state) => state.handleCart);
    const [expanded, setExpanded] = useState(false);


    return (
        <>
            <div className='header_wraper'>
                <div className='topbar shippingbar mb-md-4 pt-3 pb-3'></div>
                <div className='container-wrap'>
                    <Navbar collapseOnSelect expand="xl" expanded={expanded}>
                        <div className='logo'>
                            <Link to="/"><img src={sitelogo} alt="sitelogo"/></Link>
                        </div>
                        <div className='buttons-header d-flex'>
                            <SearchBar/>
                            <button className="btn btn-dark add-to-wallet">Connect To Wallet</button>
                        </div>
                        <div className='cart'>
                        <Link to="/cart"> <i className="fa fa-shopping-cart" aria-hidden="true">
                                 <span>{state.length}</span> 
                            </i></Link>
                        </div>
                        <div className='nav-wraper mt-2 mt-md-5'>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="btnMemu" onClick={() => setExpanded(expanded ? false : "expanded")} />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className='me-auto' onClick={() => setExpanded(false)} >
                                    {/* <NavLink to="/" exact="true" activeclassname="active">Home</NavLink> */}
                                    <li>
                                    <NavLink to="/product/41138846007502" activeclassname="active">Metal Sign</NavLink>
                                    </li>
                                    <li  className='submenu-has'>
                                    <Nav.Link>Apparel <i className="fa fa-caret-down" aria-hidden="true"></i>
                                    </Nav.Link>
                                    <ul className='submenus'>
                                    <NavLink to="/product/41166794653902" activeclassname="active">T-shirt</NavLink>
                                    <NavLink to="/product/40992657866958" activeclassname="active">hoodie</NavLink>
                                    <NavLink to="/product/40999509065934" activeclassname="active">ladies-t-shirt</NavLink>
                                    </ul>
                                    </li>
                                    <li>
                                    <NavLink to="/product/40999393001678" activeclassname="active">MUG</NavLink>
                                    </li>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </div>
            </div>
        </>
    );
}
export default Header;
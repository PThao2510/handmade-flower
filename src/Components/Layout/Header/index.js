import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Recommend from '../../../Pages/Recommend';
import './header.scss';

const logo = require('../../../Assets/Home/logo.png');

function Header(props) {
    return (
        <div>
            <div className='menu_top'>
                <div className='menu_top_container'>
                    <div className='top_menucontainer_left'>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p className='text-title'>Địa chỉ</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p className='text-title'>handmadeflower@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                    <div className='top_menucontainer_right'>
                        <p>Miễn phí ship đơn từ 200.000<span>đ</span></p>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='header_container'>
                    <Navbar expand="lg" className='form_menu'>
                        <Navbar.Brand className='logo_menu' href="/"><Link to= "/"><img src={logo} className='logo_img' /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto header-menu-nav">
                                <Nav.Link className='text-color-header' href="/">HOME</Nav.Link>
                                <NavDropdown className='text-color-header' rootCloseEvent='mousedown' title="SẢN PHẨM" id="basic-nav-dropdown">
                                    <NavDropdown.Item className='text-color-header' href="#action/3.1">Hoa Thành Phẩm</NavDropdown.Item>
                                    <NavDropdown.Item className='text-color-header' href="#action/3.2">
                                        Phụ Kiện
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='text-color-header' href="#action/3.3">Nguyên Liệu</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className='text-color-header' href="/recommend">GIỚI THIỆU</Nav.Link>
                                <Nav.Link className='text-color-header' href="#link">SỰ KIỆN</Nav.Link>
                                <Nav.Link className='text-color-header' href="/contact">LIÊN HỆ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <div className='search-and-cart'>
                            <i><IoSearchOutline /></i>
                            <i><AiOutlineUser /></i>
                            <i><LiaShoppingBagSolid /></i>
                        </div>
                    </Navbar>
                </div>

            </div>
        </div>
    );
}

export default Header;
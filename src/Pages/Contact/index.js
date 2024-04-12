import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd'
import { LiaFacebookF } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import MapLocation from '../../Components/Map';
import './contact.scss';

const banner1 = require('../../Assets/Product/bannerproductt.jpg');


function Contact(props) {
    return (
        <div>
            <div className='banner_contact'>
                <div className='banner_recommend'>
                    {/* <ul className='text_recommend'>
                        <h2>Flower Handmade</h2>
                        <p>Đan cảm xúc - Dệt niềm tin</p>
                    </ul>
                    <div className='img_bn'>
                        <ul className='img_list'>
                            <Link to="/"><img src={banner1} className='img_banner2' /></Link>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className='form_infor '>
                <Row gutter={18} className='row_content'>
                    <Col span={12} className='title_infor shadow p-3 mb-5 bg-body-tertiary rounded'>
                        <h2>Thông tin liên lạc</h2>
                        <div className='list_title'>
                            <ul className='text_title'>
                                <h5>Địa chỉ</h5>
                                <p>36 An Đào D, TT.Trâu Quỳ, Gia Lâm, Hà Nội.</p>
                            </ul>
                            <ul className='text_title'>
                                <h5>Điện thoại</h5>
                                <p>(+84) 342 616 807</p>
                            </ul>
                            <ul className='text_title'>
                                <h5>E-mail</h5>
                                <p>handmadeflower@gmail.com</p>
                            </ul>
                            <div className='text_title_end'>
                                <h5>Theo dõi chúng tôi</h5>
                                <ul>
                                    <li><FaTiktok /></li>
                                    <li><BsTwitter /></li>
                                    <li><BsInstagram /></li>
                                    <li><LiaFacebookF /></li>
                                </ul>

                            </div>
                        </div>
                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Contact;
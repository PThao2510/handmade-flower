import React from 'react';
import { Link } from 'react-router-dom';
import ItemProduct from '../Product/ItemProduct';
import { Col, Row } from 'antd';
import "./home.scss"

const banner1 = require('../../Assets/Home/banner1.jpg')
const itemview1 = require('../../Assets/Home/itemview1.png')
const itemview2 = require('../../Assets/Home/itemview2.jpg')
const itemview3 = require('../../Assets/Home/itemview3.jpg')

function Home(props) {
    return (
        <div>
            <div className='banner_home'>
                <div class="container overflow-hidden">
                    <div class="row gx-5">
                        <div class="col container_banner">
                            <div class="p-3 text_banner">
                                <h5>Flower Handmade</h5>
                                <h1>Giao hoa miễn phí toàn quốc</h1>
                                <h6>Áp dụng với đơn hàng từ 200.000đ</h6>
                                <button type="submit" class="btn_banner">Mua ngay</button>
                            </div>
                        </div>
                        <div class="col container_img">
                            <div class="p-3"><Link to="/"><img src={banner1} className='banner_img' /></Link></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='widget_conntainer'>
                <div class="sectiont_container">
                    <div class="row g-0">
                        <div class="row col-md-9 content_left">
                            <div class="col-4">
                                <div class="p-3 item_product">
                                    <Link to="/"><img src={itemview1} className='item_allproduct' /></Link>
                                    <h5>Hoa thành phẩm</h5>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="p-3 item_product">
                                    <Link to="/"><img src={itemview2} className='item_allproduct' /></Link>
                                    <h5>Phụ kiện</h5>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="p-3 item_product">
                                    <Link to="/"><img src={itemview3} className='item_allproduct' /></Link>
                                    <h5>Nguyên liệu</h5>
                                </div>
                            </div>

                        </div>
                        <div class="col-6 col-md-3 content_right">
                            <div className='content_infor'>
                                <h2>Tất cả danh mục</h2>
                                <p>Chúng tôi luôn mong muốn đem đến cho bạn những sản phẩm mang tính riêng biệt và mới lạ.</p>
                                <button type="text" class="btn_view">Xem tất cả</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='new_itemproduct'>
                <div className='content_itemproduct'>
                    <h5>Sản phẩm mới nhất</h5>
                </div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <ItemProduct />
                    </Col>
                </Row>
            </div>
        </div>

    );
}

export default Home;
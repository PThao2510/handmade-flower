import React, { useState } from 'react';
import Slider from "react-slick";
import { Tabs } from 'antd';
import { Col, Row } from 'antd';
import "./product.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Allitem from '../Product/Allitem';
import ItemProduct from "../Product/ItemProduct"
import { Input, Radio, Space } from 'antd';



const items = [
    {
        key: '1',
        label: (
            <span className='selection'>
                Tất cả sản phẩm
            </span>
        ),
        children: <Allitem />,
    },
    {
        key: '2',
        label: (
            <span>
                Hoa bó
            </span>
        ),
        children: <Allitem />,
    },
    {
        key: '3',
        label: (
            <span>
                Hoa lẻ
            </span>
        ),
        children: <Allitem />,
    },
    {
        key: '4',
        label: (
            <span>
                Phụ kiện
            </span>
        ),
        children: <ItemProduct />,
    },
    {
        key: '5',
        label: (
            <span>
                Len sợi
            </span>
        ),
        children: <ItemProduct />,
    },
    {
        key: '5',
        label: (
            <span>
                Dụng cụ móc/đan len
            </span>
        ),
        children: <ItemProduct />,
    },


];

function Product(props) {
    

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className='dashboard_allitem'>
            <div className='content_product'>
                <div className="slider_container">
                    <Slider {...settings} className='product_image' >
                        <div className='product-slider'>
                            <img src='https://i.pinimg.com/564x/95/0c/7f/950c7f29387167bc35fcb082bb3e6eb1.jpg' alt='' className='card-pic'></img >
                        </div>
                        <div className='product-slider'>
                            <img src='https://i.pinimg.com/564x/95/0c/7f/950c7f29387167bc35fcb082bb3e6eb1.jpg' alt='' className='card-pic' ></img >
                        </div>
                        <div className='product-slider'>
                            <img src='https://i.pinimg.com/564x/95/0c/7f/950c7f29387167bc35fcb082bb3e6eb1.jpg' alt='' className='card-pic' ></img >
                        </div>
                        <div className='product-slider'>
                            <img src='https://i.pinimg.com/564x/95/0c/7f/950c7f29387167bc35fcb082bb3e6eb1.jpg' alt='' className='card-pic' ></img >
                        </div>
                        <div className='product-slider'>
                            <img src='https://i.pinimg.com/564x/95/0c/7f/950c7f29387167bc35fcb082bb3e6eb1.jpg' alt='' className='card-pic'></img >
                        </div>
                        <div className='product-slider'>
                            <img src='https://i.pinimg.com/564x/95/0c/7f/950c7f29387167bc35fcb082bb3e6eb1.jpg' alt='' className='card-pic'></img >
                        </div>
                        <div className='product-slider'>
                            <img src='https://i.pinimg.com/564x/95/0c/7f/950c7f29387167bc35fcb082bb3e6eb1.jpg' alt='' className='card-pic' ></img >
                        </div>
                        <div className='product-slider'>
                            <img src='https://i.pinimg.com/564x/95/0c/7f/950c7f29387167bc35fcb082bb3e6eb1.jpg' alt='' className='card-pic'></img >
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='list_selection'>
                <h3>Danh mục</h3>
                <div className='dashboard-menu'>
                    <Tabs tabProduct tabPosition='left' defaultActiveKey="1" items={items} />
                    <h4>Sản phẩm đặc trưng</h4>
                    <div>
                        <Row>
                            <Col span={12}>col-12</Col>
                            <Col span={12}>col-12</Col>
                        </Row>
                    </div>
                </div>

            </div>
            <div>

            </div>
        </div>
    );
}

export default Product;
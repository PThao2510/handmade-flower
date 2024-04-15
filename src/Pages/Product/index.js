import React from 'react';
import Slider from "react-slick";
import "./product.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Product(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
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
        </div>
    );
}

export default Product;
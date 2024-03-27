import React from 'react';
import { Link } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import './itemproduct.scss'

const item1 = require('../../../Assets/Product/item1.jpg')

function ItemProduct(props) {
    return (
        <div className='item_product'>
            <div className='item_img_product'>
                <Link to="/"><img src={item1} className='img_product' /></Link>
            </div>
            <div className='item_content_product'>
                <div>
                    <h5>Bó hoa ly hai màu trắng hồng</h5>
                    <p>200.000 ₫</p>
                </div>
                <i className='add_to_card'><LiaShoppingBagSolid /></i>
            </div>
        </div>
    );
}

export default ItemProduct;
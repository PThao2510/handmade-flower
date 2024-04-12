import React from 'react';
import { Link } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import './itemproduct.scss'

const item1 = require('../../../Assets/Product/Itemproduct/item1.jpg')

function ItemProduct(props) {
    return (
        <div className='item_product'>
            <div className='item_img_product'>
                <Link to="/"><img src={item1} className='img_product' /></Link>
                {/* <div className='btn_item_img'>
                    <button type='text'>Xem sản phẩm</button>
                </div> */}
                <span className='new_badge'>New</span>
            </div>
            <div className='item_content_product'>
                <div className='title_product'>
                    <h5>Bó hoa ly hai màu</h5>
                    <span>200.000 ₫</span>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;
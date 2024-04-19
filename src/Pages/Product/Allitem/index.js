import React, { useState } from 'react';
import "./allitem.scss";
import { Select, Radio, Space } from 'antd';
import { Col, Row } from 'antd';
import ItemProduct from "../../Product/ItemProduct";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export default function Allitem() {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className='product_item'>
            <div className='option'>
                <div className="search-price">
                    <h4>Giá</h4>
                    <div className='price'>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Dưới 50.000đ</Radio>
                            <Radio value={2}>Dưới 100.000đ</Radio>
                            <Radio value={3}>Dưới 150.000đ</Radio>
                            <Radio value={3}>Trên 150.000đ</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <Select
                    showSearch
                    style={{
                        width: 200,
                    }}
                    placeholder="Mặc định phân loại"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                        {
                            value: '1',
                            label: 'Giá từ thấp đến cao',
                        },
                        {
                            value: '2',
                            label: 'Giá từ cao đến thấp',
                        },
                        {
                            value: '3',
                            label: 'Mặc định phân loại',
                        },

                    ]}
                />
            </div>
            <div className='allitem_categoty'>
                <Row gutter={16}>
                    <Col className="gutter-row" md={{ flex: '25%' }}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" md={{ flex: '25%' }}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" md={{ flex: '25%' }}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" md={{ flex: '25%' }}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" md={{ flex: '25%' }}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" md={{ flex: '25%' }}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" md={{ flex: '25%' }}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" md={{ flex: '25%' }}>
                        <ItemProduct />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

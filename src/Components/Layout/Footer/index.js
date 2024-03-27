import React from 'react';
import './footer.scss';

function Footer(props) {
    return (
        <div>
            <div className="footer">
                <div className="row footer_content">
                    <div className='col'>
                        VỀ CHÚNG TÔI
                        <ul>
                            <li>Email: handmadeflower@gmail.com</li>
                            <li>Phone: 0342616807</li>
                            <li>Địa chỉ: 36 An Đào D-Gia Lâm-Hà Nội</li>
                        </ul>
                    </div>
                    <div className='col'>
                        CHÍNH SÁCH
                        <ul>
                            <li>Hướng dẫn mua hàng</li>
                            <li>Hướng dẫn thanh toán</li>
                            <li>Chính sách đổi trả</li>
                            <li>Chính sách bảo mật</li>
                        </ul>
                    </div>
                    <div className='col'>THEO DÕI NGAY</div>
                    <div className='col'>
                        BẢN TIN
                        <ul>
                            <p>Đăng kí nhận bản tin của chúng tôi để biết thêm về ưu đãi, khuyến mãi đặc biệt.</p>
                        </ul>
                        <div>
                            <form>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Nhập Email" ></input>
                                </div>
                                <button type="submit" class="btn btn-primary">Gửi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_bottom'>
                <p>Copyright@Handmadeflower</p>
            </div>
        </div>

    );
}

export default Footer;
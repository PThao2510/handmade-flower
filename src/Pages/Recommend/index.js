import React from 'react';
import { Link } from 'react-router-dom';
import { GiWool } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import "./recommend.scss";

const banner1 = require('../../Assets/Recommend/banner1.png');
const content1 = require('../../Assets/Recommend/content1.png');
const content2 = require('../../Assets/Recommend/content2.jpg');

function Recommend(props) {
    return (
        <div>
            <div className='banner_container'>
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
            <div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col ">
                            <GiWool className='icon_container' />
                            <ul>
                                <h5>Sản phẩm thủ công 100%</h5>
                                <p>Chất liệu len milk 125g, baby yarn, yaoh wool.</p>
                            </ul>
                        </div>
                        <div class="col item_container">
                            <MdOutlineLocalShipping className='icon_container' />
                            <ul>
                                <h5>Miễn phí giao hàng đơn từ 200.000đ</h5>
                                <p>Nhận hàng từ 4-5 ngày tính từ ngày đặt hàng.<br></br>Đơn hàng làm theo yêu cầu vui lòng chờ 7 ngày.</p>
                            </ul>
                        </div>
                        <div class="col item_container">
                            <MdCurrencyExchange className='icon_container' />
                            <ul>
                                <h5>Lỗi 1 đổi 1 khi phát hiện lỗi</h5>
                                <p>Chúng tôi luôn mong muốn đem lại trải nghiệm tốt nhất cho quý khách.</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content_infor'>
                <div className='content_item'>
                    <div className='item_infor'>
                        <div className='img_infor'>
                            <Link to="/"><img src={content1} className='img_containerr' /></Link>
                        </div>
                        <div className='text_infor'>
                            <h2>Flower Handmade</h2>
                            <ul>
                                <p>Chúng tôi chuyên cung cấp các sản phẩm, phụ kiện, móc khóa, đồ trang trí bằng len sợi được làm thủ công an toàn, chất lượng cao.</p>
                                <p>Với thương hiệu “Flower Handmade”, khách hàng có thể yên tâm về chất lượng và tính độc đáo của sản phẩm, Thương hiệu đảm bảo rằng sản phẩm được làm hoàn toàn bằng tay và không giống với bất kỳ sản phẩm len nào khác. Điều này giúp cho sản phẩm trở nên đặc biệt và giá trị hơn trong mắt khách hàng.</p>
                            </ul>
                        </div>
                    </div>

                    <div className='item_infor'>
                        <div className='text_infor'>
                            <h2>Tầm nhìn, sứ mệnh & giá trị cốt lõi</h2>
                            <ul>
                                <p>Tầm nhìn: Trong 1 năm đầu, Len Handmade trở thành thương hiệu phát triển bền vững trong lĩnh vực móc len thủ công được khách hàng tại các thành phố lớn như Hà Nội, TP. Hồ Chí Minh, Hải Phòng …</p>
                                <p>Sứ Mệnh: Cung cấp những sản phẩm độc đáo, sáng tạo và cá nhân hóa cho khách hàng. Chúng tôi tạo ra những sản phẩm mang tính cá nhân, tương tự như một tác phẩm nghệ thuật, giúp khách hàng cảm thấy đặc biệt và tạo ra sự kết nối giữa sản phẩm và khách hàng.</p>
                                <p>Giá trị cốt lõi: Chúng tôi cam kết tạo ra những sản phẩm len thủ công độc đáo, mang tính cá nhân và đảm bảo chất lượng đáp ứng tiêu chuẩn cao nhất. Quyền lợi khách hàng được đảm bảo, đạo đức kinh doanh được tuân thủ và sự hài lòng, tin tưởng từ khách hàng là niềm hạnh phúc của chúng tôi.</p>
                            </ul>
                        </div>
                        <div className='img_infom'>
                            <Link to="/"><img src={content2} className='img_containerr' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recommend;
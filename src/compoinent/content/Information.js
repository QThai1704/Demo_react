import React from "react";
import { Link } from "react-router-dom";
import Information1 from "./Information1";
import NewsItem from "./NewsItem";
import SoICT from "./SoICT";
import MyUni from "./MyUni";


function Information() {
    return (
        <div class="row justify-content-around mt-3">
            <h2 class="text-center">ĐÀO TẠO – TUYỂN SINH</h2>
            <p class="text-center">Năm 2020, Tổ chức Giáo dục Quacquarelli
                Symonds (viết tắt QS – Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và
                nghiên cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường đang đảm nhận thuộc nhóm hạng từ 451 đến 500
                trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.</p>
            <Information1 />
            <h2 class="text-center mt-3">HỢP TÁC ĐỐI NGOẠI</h2>
            <p class="text-center">Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc tế và hợp tác doanh nghiệp
                để nâng cao chất lượng các hoạt giảng dạy, nghiên cứu và chuyển giao công nghệ.</p>
            <Information1 />
            <h2 class="text-center mt-3">CỰU SINH VIÊN</h2>
            <div class="row">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
            <SoICT />
            <MyUni />
        </div>
    );
}

export default Information;
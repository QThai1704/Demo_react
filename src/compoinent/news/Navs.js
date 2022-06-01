import React from 'react';
import { Link } from "react-router-dom";

function Navs() {
    return (
        <div class="row">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tin tức</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">...</a>
                </li>

            </ul>
        </div>
    );
}

export default Navs;
import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


function Header() {
    return (
        <div class="container mb-5">
            <div class="row justify-content-between">
                <div class="col-md-3">
                    <img src="./compoinent/images/logo-soict-hust-1.png" class="img-thumbnail" alt="logo" />
                </div>
                <div class="col-md-6">
                    ĐẠI HỌC BÁCH KHOA HÀ NỘI
                    TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                </div>
                <div class="col-md-3">
                    <input class="form-control" type="text" placeholder="Search" aria-label="default input example" />
                </div>
            </div>
        </div>
    )
}

export default Header
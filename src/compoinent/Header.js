import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-soict-hust-1.png';
import './Header.css';
// import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


function Header() {
    return (
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-3">
                    <img src={logo} class="img-thumbnail" alt="logo" id="logo" />
                </div>
                <div class="col-md-6">
                    <h3 class="text-align">ĐẠI HỌC BÁCH KHOA HÀ NỘI
                        TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                    </h3>
                </div>
                <div class="col-md-3">
                    <input class="form-control" type="text" placeholder="Search" aria-label="default input example" />
                </div>
            </div>
        </div>
    )
}

export default Header
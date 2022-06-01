import React from "react";
import { Link } from "react-router-dom";
import MyUni_Item from "./MyUni_Item";
import Extend from "./Extend";

function MyUni() {
    return (
        <React.Fragment>
            <div class="container-fluid bg-warning">
                <h3 class="mt-2 mb-5 text-center">VỀ CHÚNG tôi</h3>
                <div class="row justify-content-around">
                    <MyUni_Item />
                    <MyUni_Item />
                    <MyUni_Item />
                    <MyUni_Item />
                    <MyUni_Item />
                </div>
            </div>
            <Extend />
        </React.Fragment>

    );
}

export default MyUni;
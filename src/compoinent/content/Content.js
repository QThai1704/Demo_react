import React from "react";
import { Link } from "react-router-dom";
import News from "./News";
import Event from "./Event";
import Information from "./Information";




function Content() {
    return (
        <div class="container">
            <News />
            <Event />
            <Information />
        </div>

    );
}

export default Content;
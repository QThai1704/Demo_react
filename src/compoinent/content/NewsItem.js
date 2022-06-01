import React from "react";
import { Link } from "react-router-dom";
import image from "./image/image2.jpg";

function NewsItem() {
    return (
        <div class="col-md-3">
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

    );
}

export default NewsItem;
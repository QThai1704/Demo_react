import React from "react";
import { Link } from "react-router-dom";
import NewsItem from "./NewsItem";
import Extend from "./Extend";
function News() {
    return (
        <div class="row justify-content-around mt-5">
            <h2 class="text-center">Tin mới nhất</h2>
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <Extend />
        </div>

    );
}

export default News;
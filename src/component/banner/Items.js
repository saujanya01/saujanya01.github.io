import React from "react";

function Item(props) {
    return (
        <ul>
            <li><p className="banner-card-topic"><a target="__blank" href={props.details.link}>{props.details.name}</a></p></li>
            <p className="banner-card-topic-date">{props.details.date}</p>
            <p className="banner-card-topic-desc">{props.details.desc}</p>
        </ul>
    )
}

export default Item;
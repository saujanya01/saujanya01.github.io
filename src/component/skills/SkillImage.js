/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function SkillImage(props) {
    return (
        <>
            {props.images.map((image, index)=> {
                return (
                    <img title={image.name} key={index} src={image.src} alt={image.name}/>
                )
            })}
        </>
    )
}

export default SkillImage;
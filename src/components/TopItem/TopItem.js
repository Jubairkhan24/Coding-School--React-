import React from 'react';
import './TopItem.css'

const TopItem = (props) => {
    const { name, img, cost, Instructor } = props.topitem
    return (
        <div className="topitem-card-body">
            <div className="">
                <img className="topitem-img-resize" src={img} alt="" />
            </div>
            <div className="text-resize">
                <h4>Course Name: {name}</h4>
                <p>Instructor: {Instructor}</p>
                <p><small>Type: {cost}</small></p>
            </div>
        </div>
    );
};

export default TopItem;
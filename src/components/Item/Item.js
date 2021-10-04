import React from 'react';
import './Item.css'

const Items = (props) => {
    const { name, img, cost, Instructor, duration } = props.item
    return (
        <div className="card-body">
            <div className="">
                <img className="img-resize" src={img} alt="" />
            </div>
            <div className="text-resize">
                <h4>Course Name: {name}</h4>
                <p>Instructor: {Instructor}</p>
                <p>Type: {cost}</p>
                <p><small>Duration: {duration}</small></p>
            </div>
        </div>
    );
};

export default Items;
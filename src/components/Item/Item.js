import React from 'react';
import './Item.css'

const Items = (props) => {
    // console.log(props.item)
    const { name, img, cost, Instructor, duration } = props.item
    return (
        <div className="card-body">
            {/* <h1>this is: {name}</h1>
            <h2>price: {cost}</h2> */}
            {/* <div class="row row-cols-1 row-cols-md-3 g-4"> */}
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
import React from 'react';
import './Instructor.css'

const Instructor = (props) => {
    const { name, img, info } = props.instructor
    // console.log(props.instructor)
    return (
        <div className="instructor-card-body">
            <div className="">
                <img className="instructor-img-resize" src={img} alt="" />
            </div>
            <div className="text-resize">
                <h4>Name: {name}</h4>
                <p>Info: {info}</p>

            </div>
        </div>
    );
};

export default Instructor;
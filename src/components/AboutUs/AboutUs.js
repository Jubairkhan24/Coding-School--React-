import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './AboutUs.css'

const AboutUs = () => {
    const [instructors, setinstructors] = useState([]);

    useEffect(() => {
        fetch('./instructors.json')
            .then(res => res.json())
            .then(data => setinstructors(data));
    }, [])
    return (
        <div>
            <div className="text-light my-5">
                <h1>Our Instructors </h1>
            </div>
            <div className="instructor-card">
                {
                    instructors.map(instructor => <Instructor
                        key={instructor.id}
                        instructor={instructor}
                    ></Instructor>)
                }
            </div>
        </div>

    );
};

export default AboutUs;
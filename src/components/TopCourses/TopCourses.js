import React, { useState, useEffect } from 'react';
import TopItem from '../TopItem/TopItem';
import './TopCourses.css'

const TopCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./Top-courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div >
            <div className="text-light my-5">
                <h1>Premium Courses</h1>
            </div>
            <div className="top-courses-card-container mx-auto my-3">
                {
                    courses.map(topitem => <TopItem
                        key={topitem.id}
                        topitem={topitem}
                    ></TopItem>)
                }
            </div>

        </div >
    );
};

export default TopCourses;
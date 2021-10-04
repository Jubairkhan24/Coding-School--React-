import React from 'react';
import TopCourses from '../TopCourses/TopCourses';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="home-style">
                <div className="home-text-style">
                    <h1 className="">Welcome to Coding Vidyalaya</h1>
                    <h3 className="">A online educational website for programming</h3>
                </div>
                <div className="button-body">
                    <button className="button-style btn-primary btn btn-lg">Start Course</button>
                    <button className="button-style btn-primary btn  btn-lg">Contact Us</button>
                </div>
            </div>
            <div>
                <TopCourses></TopCourses>
            </div>
        </div>
    );
};

export default Home;
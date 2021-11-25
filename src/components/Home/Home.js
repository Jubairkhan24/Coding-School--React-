import React from 'react';
import { useHistory } from 'react-router-dom';
import TopCourses from '../TopCourses/TopCourses';
import './Home.css'
const Home = () => {

    const history = useHistory();

    const contactButton = () => {
        history.push('./contactus');
    }
    const courseButton = () => {
        history.push('./services')
    }
    return (
        <div>
            <div className="home-style">
                <div className="home-text-style">
                    <h1 className="">Welcome to Coding Vidyalaya</h1>
                    <h3 className="">A online educational website for programming</h3>
                    {/* <h2>this is editable line</h2> */}
                </div>
                <div className="button-body">
                    <button className="button-style btn-primary btn btn-lg" onClick={courseButton}>Start Course</button>
                    <button className="button-style btn-primary btn btn-lg" onClick={contactButton} >Contact Us</button>
                </div>
            </div>
            <div>
                <TopCourses></TopCourses>
            </div>
        </div>
    );
};

export default Home;
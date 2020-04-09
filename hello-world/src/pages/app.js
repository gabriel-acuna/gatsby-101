import React from 'react';
import {Router} from '@reach/router';
import Home from '../components/home';
import MyCourses from '../components/my-courses';

export default (props)=>{

    return(
        <div>
            <Router>
                <Home path="/app"/>
                <MyCourses path="/app/courses"/>
            </Router>
        </div>
    );
}
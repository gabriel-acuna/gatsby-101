import React from 'react';
import '../styles/global-secondary.css';
import Navigation from './navigation';
export default(props)=>{

    return(
        <div>
            
            {props.children}
            <Navigation/>
        </div>
    );
}
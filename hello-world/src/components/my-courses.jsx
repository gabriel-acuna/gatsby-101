import React from 'react';


export default (props)=>{
    const isAuth = false;
    if(!isAuth){
        props.navigate('/app');
        return null;
    }
    return(
        <div>
            <h1>Cursos</h1>
        </div>
    );
}
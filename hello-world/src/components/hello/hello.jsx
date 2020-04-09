import React from 'react';
//import helloComponents from './hello.module.css';
import styled from '@emotion/styled';


const Alert = styled.p`
    background-color: rgba(35, 50, 130, 0.14);
    color: #673AB7;
    border-radius: 4px;
    padding: 8px 15px;
    font-weight: bolder;
`;

const title =  {
    'font-size':'4em',
    'font-weight':'bold'  }  ;

const Hello = (props) => {
    return (
        <div  className={props.className}>
            <Alert>Alerta</Alert>
            <h1 css={title}>Hola {props.name}</h1>
        </div>
    );
}

export default styled(Hello)`
    color:steelblue;
`


import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const container = {
    display: 'flex'
}

const element = {
    flex: '1',
    textAlign: 'center',
    color: 'white',
    padding: '10px 15px'
}
const NavLink = styled(Link)`
    background-color:${props => props.active ? 'red':'blue'}

`;

export default (props) => {
    const  [path, setPath] = useState('index');
   
    return (
        <nav css={container}>
            <NavLink to="/" onClick={ ev=> setPath('index')}  active={ path == 'index'} css={element}>Home</NavLink>
            <NavLink to="/about" onClick={ ev=> setPath('about')} active={ path === 'about'}  css={element}>About</NavLink>
        </nav>
    );
}
import Layout from './src/components/layout';
import React from 'react';
export const wrapPageElement = ({elements, props})=>{
    return <Layout {...props}>{elements}</Layout>
};
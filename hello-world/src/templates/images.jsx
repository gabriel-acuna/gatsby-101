import React from 'react'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';


export default (props) => {

    console.log(props);

    return (
        <div>
            {props.pageContext.relativePath}
            <Img fluid={props.data.file.childImageSharp.fluid}  alt={props.data.relativePath}/>
        </div>
    );

}

export const query = graphql`
    query($relativePath:String){
        file(relativePath:{eq:$relativePath}){
            relativePath,
            childImageSharp{
                fluid(maxWidth:1920){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;
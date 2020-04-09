import React from "react"

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
export default (props) => {

    return (
        <div>
          
           
           


            <Img fluid={props.data.file.childImageSharp.fluid} alt={props.data.relativePath} />
            
          
        </div>
    )
}

export const query = graphql`
query {
    file(relativePath:{eq:"old-man-flash.png"}){
        relativePath,
        childImageSharp{
            fluid(maxWidth:1920){
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`;
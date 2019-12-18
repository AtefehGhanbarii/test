import React from 'react';
import styled from "styled-components";

const A = styled.a `
text-decoration: none;
 border: ${props => props.type === 'primary' ? 'none' : '2px solid #fe4545'};
    border-radius: 30px;
    padding: ${props => props.type === 'primary' ? '10px 0px' : '10px 72px'};
    color: ${props => props.type === 'primary' ? '#fff' : '#fe4545'};
    box-shadow:${props => props.type === 'primary' ? 'none' : ' 0 0 10px -1px #888'};
    background-color:${props => props.type === 'primary' ? '#16cccc' : 'none'};
    max-width: 220px;
    margin-left: ${props => props.type === 'primary' ? '80px' : '10px'};
    margin-bottom: 8px;
   
    @media (max-width: 600px) {
     padding: ${props => props.type === 'primary' ? '10px 0px' : '10px 42px'};
   }
   ...${props => props.style}
`;

export const Linkitem = ( props ) => {
 return (
   <>
        <A 
            href={props.link} type={props.type}>{props.children}</A>
  </> 
);
 }





import React, {Component} from 'react';
import styled from "styled-components";
import Heading from '../components/heading/Heading';
import Sale from '../components/sale/Sale';
import Contact from '../components/contact/Contact';
import Download from '../components/download/Download';

const Div = styled.div `
  width:700px;
  margin:auto;
  height: 544px;
  
`;


class Home extends Component {
    render(){
        return(
            <Div>
                <Heading />
                <Sale />
                <Download />
                <Contact />
            </Div>
        )
    }
}


export default Home;
import React, { Component } from 'react';
import styled from "styled-components";
import MetaTags from 'react-meta-tags';
import { Linkitem } from '../kit/Linkitem/linkitem';

const Div = styled.div `
text-align: center;
  margin-top: 40px;
  margin-bottom: 50px;
  > Linkitem {
    margin-left:10px;
 }
  h4 {
  margin-bottom: 50px;
  @media (max-width: 600px) {
    margin-right: 40%;
 }
  }
  div {
    margin-top: 20%;
  }
 
`;

const Section = styled.section `
@media (max-width: 600px) {
  margin-right: 47%;
}
`;

class Contact extends Component {

    render() {
        return (
           <Div>
              <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
                 <h4>دوستانت رو از تخفیف با خبر کن!!</h4>
                 <Section>
                    <Linkitem link="http://google.com">تلگرام</Linkitem>
                    <Linkitem link="http://google.com">پیامک</Linkitem>
                    <Linkitem link="http://google.com">ایمیل</Linkitem>
                 </Section>
              
                <div>
                <h4>FIDIBIO.COM</h4>
                </div>
           </Div>
        )
    }
}



export default Contact;
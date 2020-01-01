import React, { Component } from 'react';
import styled from "styled-components";
import saleImage from '../../assets/images/sale.png';


const Div = styled.div `
  display: grid;
  grid-template-columns: 57% 34%;
  margin-bottom: 15%;
  padding-top: 3%;
  direction: rtl;
  > div {
      margin-top:40px;
  }
  > div img {
    width: 369px;
    height: 370px;
    margin-left: 30px;
  }
  h3 {
    text-align: right;
    line-height: 39px;
    margin-top: 109px;
    @media (max-width: 600px) {
      margin-right: 30%;
   }
   > span {
     color: #fe4545;
   }
  }
  p {
    border-right: 5px solid #fe4545;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: right;
    padding-right: 9px;
    @media (max-width: 600px) {
      margin-right: 30%;
   }
  }
  @media (max-width: 600px) {
    display:inline-block;
 }
`;

class Sale extends Component {

    render() {
        return (
           <Div>
             <div>
                 <img src={saleImage} alt="Logo" />
               </div>
               <div>
                <h3><span> درصد تخفیف40</span> بدون<br></br> محدودیت برای اولین<br></br> خرید از فیدیبو</h3>
                <p> dgk 40 %:کد تخفیف</p>
               </div>
               
           </Div>
        )
    }
}


   
export default Sale;
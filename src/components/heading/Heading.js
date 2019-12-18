import React, { Component } from 'react';
import { Button } from '../../components/kit/Button/Button';
import styled from "styled-components";
import Background from '../../assets/images/background_image.png';
import Phone from '../../assets/images/ad.png';
import Logo from '../../assets/images/logo.png';
import Modal from '../../components/kit/Modal/modal';
import { Linkitem } from '../kit/Linkitem/linkitem';


const Div = styled.div `
  background-image: url(${Background});
  width:900px;
  margin:auto;
  height: 544px;
  background-repeat: repeat-y;
  > div {
      margin-top:40px;
  }
  > span {
    float: right;
    margin-right: 20%;
    @media (max-width: 600px) {
        margin-right: 64%;
     }
  }
  > span img {
    width: 125px;
    margin-top: 68%;
    @media (max-width: 600px) {
        margin-top: 10%;
     }
  }
  > div img {
    margin-left: 19px;
  }
  > section img {
    width: 72%;
    margin-top: 26%;
    margin-left: 10%;
    @media (max-width: 600px) {
        width: 64%;
        margin-top: 2%;
        margin-left: 3%;
     }
  }
  > section p {
      text-align: right;
      margin-top: 58%;
      margin-right: 16%;
      @media (max-width: 600px) {
        text-align: left;
        margin-left: 25%;
        margin-top: 10%;
     }
     > span {
         color: #16cccc;
     }
  }
  > section h2 {
    text-align: right;
    line-height: 42px;
    margin-right: 16%;
    @media (max-width: 600px) {
        text-align: left;
        margin-left: 25%;
     }
     > span {
        color: #16cccc;
     }
     > h3 {
         color: #f13030;
     }
}
> section Button {
    margin-left: 41px;
    @media (max-width: 600px) {
        margin-left:15%;
     }
}
@media (max-width: 600px) {
   display:inline-block;
}
`;

const Span = styled.span `
display: flex;
justify-content: space-between;
padding: 0px 10px; 
> button {
    background-color: #fff;
    border: none;
}
`;

const Section = styled.section `
display: grid;
grid-template-columns: 72% 59%;
  @media (max-width: 600px) {
      display:inline-block;
    width:59%;
 }
`;



class Heading extends Component {
    state = {
        showModal: false
    };

    handleShowModal = () => {
        this.setState({
            showModal: true
        });
    };

    ModalCancelHandler = () => {
        this.setState({showModal: false});
    };


    render() {
        return (
            <>
            
           <Div>
              <span><img src={Logo} alt="Logo" /></span> 
               <Section>
               <div>
                 <img src={Phone} alt="Logo" />
               </div>
               <section>   
                 <p>با دانلود اپلیکیشن <span>فیدیبو</span> </p>
                 <h2>همین امروز<br></br> از<span>فیدیبو</span> و <span>دیجی کالا</span><br></br> هدیه بگیرید</h2>
                 <Button
                        title="دانلود رایگان فیدیبو"
                        onClick={this.handleShowModal}
                        type='primary'
                    />
               </section>
               </Section>
              
               <Modal show={this.state.showModal} modalClosed={this.ModalCancelHandler}>
                           <Span>
                               <div>
                                  <button className='closeButModal' onClick={this.ModalCancelHandler}>*</button>
                               </div>
                               <div>
                                  <p>دانلود اپلیکیشن فیدیبو</p>
                               </div>
                            </Span>
                            <section>
                                <p>
                                با دانلود رایگان اپلیکیشن فیدیبو روی موبایل، تبلت یا رایانه می‌‌توانید کتاب‌ها و مجلات بهترین ناشران ایرانی و بین‌المللی را قانونی بخوانید
                                </p>
                            </section>
                            <p>اندروید</p>
                            <Linkitem link="http://google.com" type="primary">دریافت مستقیم</Linkitem>
                            <Linkitem link="http://google.com" type="primary">دریافت از گوگل پلی</Linkitem>
                            <h6>توجه: فیدیبو در کافه بازار عرضه نمی شود</h6>
                            <p>iOS</p>
                            <Linkitem link="http://google.com" type="primary">دریافت مستقیم</Linkitem>
                            <p>ویندوز</p>
                            <Linkitem link="http://google.com" type="primary">دریافت ویندوز</Linkitem>
                    </Modal>
           </Div>
           </>
        )
    }
}



export default Heading;
import React, { Component } from 'react';
import styled from "styled-components";
import { Button } from '../../components/kit/Button/Button';
import Modal from '../../components/kit/Modal/modal';
import { Linkitem } from '../kit/Linkitem/linkitem';

const Div = styled.div `
  text-aligne: center;
  > p {
    text-align: center;
    line-height: 33px;
    font-weight: bold;
    @media (max-width: 600px) {
        text-align: center;
        margin-right: 40%;
     }
  }
  > h4 {
    margin:0px;
}
  > div {
    text-align: center;
    margin-bottom: 55px;
  }
  > div Button {
    @media (max-width: 600px) {
        margin-right:39%;
     }
  }
  > Linkitem {
      margin-left:3px;
  }
  > div section {
    background-color: #eee;
    > p {
        background-color: #fff;
        margin: 17px 17px;
        border-radius: 5px;
        padding: 12px 21px;
    }
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




class Download extends Component {
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
           <Div>

               <p>با دانلود اپلیکیشن فیدیبو هزاران کتاب الکترونیک، صوتی و پادکست،<br></br> همیشه و همه حا در گوشی موبایل همراه شماست.</p>
 
               <div>
                    <Button
                            title="دانلود رایگان فیدیبو"
                            onClick={this.handleShowModal}
                            type='primary'
                        />
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
               </div>
           </Div>
        )
    }
}



export default Download;
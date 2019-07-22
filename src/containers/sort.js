import React, { Component } from 'react';
import { Input } from '../components/kit/Input/Input';
import { Button } from '../components/kit/Button/Button';
import styled from "styled-components";

const Section = styled.section`
  //background-color: #eee;
  font-size: 1em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  display: flex;
  text-align: right;
  justify-content: space-between;
  ...${props => props.style}
`;

class Sort extends Component {
    state = {
        productName: '',
        productPrice: '',
        products: [],
        sale: [],
        totalPrice: 0
    };

    handleSubmit = () => {
        const newItem = {
            price: this.state.productPrice,
            name: this.state.productName
        };
        this.setState({
            products: [...this.state.products, newItem]
        });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    sort = (products) => {
        return products.sort((a, b) => {
            return a.price - b.price;
        });
    };

    render() {
        return (
            <Section>
                {/*product list*/}
                <div>
                    <h5>لیست سفارش</h5>
                    {
                        this.sort(this.state.products).map(product => {
                            return (
                                <div>
                                    <p>{product.name}:{product.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {/*add product*/}
                <div>
                    <h5>افزودن فیلد جدید</h5>
                    <Input
                        name="productName"
                        title="نام"
                        value={this.state.productName}
                        type='text'
                        placeholder='نام'
                        onChange={this.handleChange}
                    />
                    <br/>
                    <Input
                        name="productPrice"
                        title="سفارش"
                        value={this.state.productPrice}
                        type='text'
                        placeholder='سفارش'
                        onChange={this.handleChange}
                    />
                    <br/>
                    <Button
                        title="ثبت"
                        onClick={this.handleSubmit}
                    />
                </div>
            </Section>
        )
    }
}


export default Sort;



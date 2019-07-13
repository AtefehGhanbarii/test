import React, { Component } from 'react';
import { Button } from '../components/kit/Button/Button.js';
import styled from 'styled-components';
import Select from '../components/kit/Select/Select.js';
import { SelectItem } from "../components/kit/Select/SelectItem";

const Div = styled.div`
      background-color: #eee;
     text-align: center;
    `;

class Counter extends Component {
    state = {
        count: 0,
        showOption: false,
        selectedOption: null,
    };

    // handleIncrease = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //
    //     })
    // };

    handleMultiIncrease = () => {
        const length = this.state.count.toString().length;
        console.log(length)
        let stepper = '1';
        for (let i = 1; i <= length - 1; i++) {
            stepper = `${stepper}0`;
        }
        console.log(stepper, 'this is stepper')
        return Number(stepper);
    };

    handleIncrease = () => {
        this.setState({
            count: this.state.count + Number(this.handleMultiIncrease())
        });
    };

    handleDecrease = () => {
        this.setState({
            count: this.state.count - Number(this.handleMultiIncrease())
        })
    };

    hadleShowOption = () => {
        this.setState({
            showOption: true
        })
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    handleSelect = (item) => {
        console.log(item, 'this is item inside handle selc inside counter')
    };

    render() {
        const { selectedOption } = this.state;
        const options = [
            { name: 'tehran', value: 'tehran' },
            { name: 'msahahad', value: 'mashad' },
            { name: '1', value: '1Value' },
            { name: '2', value: '2Value' },
            { name: '3', value: '3Value' }
        ];
        return (
            <div>
                {/*Current count: {this.state.count}*/}
                {/*<hr/>*/}
                {/*<Button*/}
                {/*    type="primary"*/}
                {/*    loading*/}
                {/*    title="string"*/}
                {/*    onClick={this.handleIncrease}*/}
                {/*/>*/}
                {/*<Button title="-" onClick={this.handleDecrease} disabled={this.state.count === 0}/>*/}
                {/*{this.state.count.toString().length}<br/>*/}

                <Select
                    onSelect={this.handleSelect}
                    options={options}
                    placeholder="شهر"
                />
            </div>
        );
    }
}


export default Counter;

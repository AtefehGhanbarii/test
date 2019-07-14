import React,{ Component } from 'react';
import NewsList from './news_list';
import Products from '../_mocApi/Products';

class Header extends Component {
    state = {
        title: 'this keywords are:',
        keywords: ''
    };

    inputChangeHandler = (event) => {
        // console.log(event.target.value)
        // this.state.keywords = event.target.value;
        this.setState({keywords: event.target.value})
        // this.setState({productData: Products})
    };

    render(){
        console.log(Products)
        return(
            <div>
                <input type="text" onChange={this.inputChangeHandler}/>
                <NewsList productsItem={Products}/>
                onClick={console.log('this is clicked')}
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </div>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import Backdrop from '../Backdrop/backdrop';
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    display: inline-grid;
    width: 29%;
    border: 1px solid #ccc;
    left: 34%;
    top: 4%;
    box-sizing: border-box;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    text-align: center;
    
@media (max-width: 600px) {
    width: 38%;
    left: calc(38% - 299px);
    padding: 0px 0px;
    height: 670px;
}
`;

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <Div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </Div>
            </div>
        )
    }
}



export default Modal;
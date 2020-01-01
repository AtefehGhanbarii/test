import React from 'react';
import styled from 'styled-components';

const ButtonSty = styled.button`
  background-color: ${props => props.type === 'primary' ? '#5cb85c' : '#529052' }
  border: none;
  padding: 11px 70px;
  border-radius: 27px;
  font-size: 17px;
  margin-top: 2%;
  color: #fff;
  curser: pointer;
  ...${props => props.style}
`;

export const Button = (props) => {
    return (
        <ButtonSty
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type}
            loading={props.loading}
        >
            {props.title}
        </ButtonSty>
    );
};

Button.defaultProps = {
    title: 'دکمه',
    disabled: false,
    loading: false,
    style: {}
};


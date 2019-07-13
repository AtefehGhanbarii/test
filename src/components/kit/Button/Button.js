// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    title: String,
    type: 'primary' | 'secondary';
    onClick: Function,
    disabled: Boolean,
    loading: Boolean,
    style: Object
};

const ButtonSty = styled.button`
  background-color: ${props => props.type === 'primary' ? 'blue' : 'red'}
  font-size: 1em;
  width: 300px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  ...${props => props.style}
`;

export const Button = (props: Props) => {
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
    type: 'primary',
    disabled: false,
    loading: false,
    style: {}
};


// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    title: 'string',
    type: string;
    onClick: Function,
    disabled: 'string',
    loading: 'boolean',
    style: {}
};

const ButtonSty = styled.button`
  background-color: ${props => props.type === 'primary' ? 'blue': 'red'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Button = (props: Props) => {
    return (
        <ButtonSty onClick={props.onClick} disabled={props.disabled} type={props.type} loading={props.loading}>
            {props.title}
        </ButtonSty>
    );
};

Button.defaultProps = {
    title: 'دکمه',
};


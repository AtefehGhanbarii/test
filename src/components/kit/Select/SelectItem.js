// @flow
import React from 'react';
import { Button } from '../Button/Button';

type Props = {
    option: Object,
    onSelect: Function
};

export const SelectItem = (props: Props) => {
    return (
        <div>
            <Button
                title={props.option.name}
                onClick={() => props.onSelect(props.option)}
            />
        </div>
    );
};

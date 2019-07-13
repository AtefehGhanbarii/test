// @flow
import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { SelectItem } from "./SelectItem";

type Props = {
    title: String,
    onSelect: Function,
    options: Array,
    placeholder: String
};

export default class Select extends React.Component<Props> {
    state = {
        show: false,
        selectedName: ''
    };

    handleShowDropDown = () => {
        this.setState({
            show: true
        })
    };

    handleSelectItem = (item) => {
        if (item.name === this.state.selectedName) {
            this.setState({
                selectedName: '',
                show: false,

            });
            this.props.onSelect('');
        } else {
            this.props.onSelect(item);
            this.setState({
                show: false,
                selectedName: item.name
            });
        }

    };

    render() {
        const { show, selectedName } = this.state;
        const { options, placeholder } = this.props;
        return (
            <div>
                <Button
                    title={selectedName ? selectedName : placeholder}
                    type={"secondary"}
                    onClick={this.handleShowDropDown}
                />
                <br/>
                {
                    show ? <div>
                        {
                            options.map(option => {
                                return <SelectItem
                                    option={option}
                                    onSelect={this.handleSelectItem}
                                />
                            })
                        }
                    </div> : null
                }
            </div>
        );
    }
}

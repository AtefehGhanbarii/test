import React, { Component } from 'react';

class SampleTest extends Component {
    detectArray = (array) => {
        return (
            array.filter((value) => {
                if (value instanceof Array) {
                    console.log(value)
                }
            })
        )
    };

    detectObject = (array) => {
        return (
            array.filter(value => {
                if (value instanceof Object && !(value instanceof Array)) {
                    console.log(value)
                }
            })
        );
    };

    detectString = (array) => {
        return (
            array.filter((value) => {
                if (typeof value === 'string') {
                    console.log(value)
                }
            })
        );
    };

    detectNumber = (array) => {
        return (
            array.filter((value) => {
                if (typeof value === 'number') {
                    console.log(value);
                }
            })
        )
    };

    detect = (array, type) => {
        switch (type) {
            case 'object':
                return this.detectObject(array);
            case 'array':
                return this.detectArray(array);
            case 'string':
                return this.detectString(array);
            case 'number':
                return this.detectNumber(array);
            default:
                this.detect(array, 'object');
        }
    };

    render() {
        const a = [
            'salam',
            'mamad',
            1,
            [1, 2, 3],
            { a: 'reza' },
            8,
            'chetori'
        ];
        return (
            <div>
                {this.detect(a, 'object')}
                {this.detect(a, 'array')}
                {this.detect(a, 'string')}
                {this.detect(a, 'number')}
            </div>
        )
    };
}


export default SampleTest;
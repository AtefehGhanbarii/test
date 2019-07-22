import React, { Component } from 'react';

export default class Finder extends Component {
    // getAgeByName = (array, name) => {
    //     return array.filter(value => value.name === name);
    //
    // };
    //
    // getMultiAge = (array) => {
    //     return array.map(value => value.age * 2);
    // };
    getOneArray = () => {
        const computers = [
            { type: 'Laptop', price: 124, os: 'Windows' },
            { type: 'Desk', price: 124, os: 'Mac' },
            { type: 'Desk', price: 124, os: 'Windows' },
            { type: 'Laptop', price: 124, os: 'Mac' },
            { type: 'Laptop', price: 124, os: 'Windows' },
        ];

        let osTypes = computers.reduce((start, item) => {
            if (item.os === 'Mac') {
                return { mac: start.mac + 1, windows: start.windows }
            } else {
                return { mac: start.mac, windows: start.windows + 1 }
            }
        }, { mac: 0, windows: 0 });
        console.log(osTypes)
    };

    render() {
        return (
            <div>
                {this.getOneArray()}
            </div>
        );
    }
};
import React, {Component} from 'react';
import Products from '../_mocApi/Products';
import Sale from '../_mocApi/Sale';

class Shop extends Component {
    // calculate = () => {
    //     const data = {
    //         totalPrice: 0,
    //         totalDiscount: 0
    //     };
    //     Sale.map(sItem => {
    //         const foundItem = Products.find(product => product.id === sItem.pid);
    //         return {
    //             price: sItem.qty * foundItem.price,
    //             discount: sItem.qty * (foundItem.discount || foundItem.price)
    //         };
    //     }).map(item => {
    //         data.totalPrice += item.price;
    //         data.totalDiscount += item.discount
    //     });
    //     return data;
    // };
    //
    // calculate = () => {
    //     const a = Sale.map(sItem => {
    //         const foundItem = Products.find(product => product.id === sItem.pid);
    //         return {
    //             price: sItem.qty * foundItem.price,
    //             discount: sItem.qty * (foundItem.discount || foundItem.price)
    //         };
    //     }).reduce((start, current ) => {
    //         return {totalPrice:start.totalPrice + current.price, totalDiscount:start.totalDiscount + current.discount}
    //     },{totalPrice: 0, totalDiscount: 0});
    //     console.log(a)
    // };

    calculate = () => {
        const a = Sale.reduce((acc, sItem) => {
            const foundItem = Products.find(product => product.id === sItem.pid);
            acc.price += sItem.qty * foundItem.price;
            acc.discount += sItem.qty * (foundItem.discount || foundItem.price);
            return acc;
        }, {price: 0, discount: 0});
        console.log(a)
    };

    render() {
        const result = this.calculate();
        console.log(result)
        return (
            <>

            </>
        )
    }
}


export default Shop;



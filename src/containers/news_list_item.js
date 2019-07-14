// import React from 'react';
//
// const NewsItem = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h6>{props.item.name}</h6>
//             <h6>{props.item.price}</h6>
//             {props.children}
//         </div>
//     )
// }
//
//
// export default NewsItem;


import React from 'react';

const NewsItem = (props) => {
    return(
        <div>
            <h6>{props.product.name}</h6>
            <h5>{props.product.price}</h5>
        </div>
    )
}


export default NewsItem;


























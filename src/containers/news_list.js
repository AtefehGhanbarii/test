// import React from 'react';
// import NewsItem from './news_list_item';
//
// const NewsList = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h6>news list</h6>
//             {
//                 props.productsItem.map((item) => {
//                     return (
//                         <NewsItem key={item.id} item={item}>
//                             <h5>hello children</h5>
//                         </NewsItem>
//                     )
//                 })
//             }
//         </div>
//     )
// };
//
//
// export default NewsList;


import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) => {
    console.log(props)
    return (
        <div>
            <h5>news list</h5>
            {
                props.productsItem.map((product) => {
                    return (
                        <NewsItem product={product}/>
                    )
                })
            }
        </div>
    )
}


export default NewsList;

















































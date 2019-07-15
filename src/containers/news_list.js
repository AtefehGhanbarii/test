
import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) => {
    console.log(props)
    return(
        <div>
            <h5>news list</h5>
            {
                props.productsItem.map((product) => {
                    return (
                          <NewsItem key={product.id} product={product}>
                               <h5>hello children</h5>
                          </NewsItem>
                    )
                })
            }
        </div>
    )
}


export default NewsList;










































import React from 'react';

var divs = document.getElementsByTagName('div');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function () {
        console.log('you clicked div #' + i)
    })
}

const Test = () => {
    return (
        <>
            <div>
                <h5>test1</h5>
            </div>
            < div>
                < h5>test2< /h5>
            </div>
            <div>
                <h5>test3</h5>
            </div>
        </>

)}


export default Test;
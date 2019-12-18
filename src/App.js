import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Contact from './components/contact/Contact';

import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 34px 35px;
    border-bottom: 1px solid #eee;
    a {
    background-color: #525050bd;
    text-decoration: none;
    color: #fff;
    width: 100px;
    text-align: center;
    padding: 7px;
    border-radius: 8px;
    font-weight: bold;
    }
`;

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <home />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Route exact render={() => <h3>oops 404</h3>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default App;

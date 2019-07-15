import React from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import Product from './containers/product'
import Counter from './containers/counter';
import Home from './containers/Home';
import SelectBox from './containers/select';
import Profile from './containers/profile';
import Posts from './containers/posts';
import PostItem from './containers/post_item'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink
                        to="/counter"
                        activeStyle={{ color: 'red' }}
                        activeClassName="selected"
                    >
                        Counter</NavLink><br/>
                    <Link to={{
                        pathname: '/select',
                        hash: '#selectbox',
                        search: '?select=true'
                    }}>select</Link><br/>
                </header>
                <Switch>
                    <Route exact path="/posts/:id/:username" component={PostItem}/>
                    <Route exact path="/counter" component={Counter}/>
                    <Route exact path="/product" component={Product}/>
                    <Route exact path="/select" component={SelectBox}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/posts" component={Posts}/>
                    <Route exact path="/"  component={Home}/>
                    <Route exact render={()=> <h3>oops 404</h3>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default App;

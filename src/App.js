import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Home from './containers/Home';
import Logout from './containers/Auth/Logout/Logout';
import Contact from './components/contact/Contact';
import Auth from './containers/Auth/Auth';
import styled from 'styled-components';
import * as actions from './store/actions/index';

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

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     auth: authReducer
// });

// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));

// const App = () => {
//     return (
//         <Provider store={store}>
//             <BrowserRouter>
//                 <div>
//                     <home />
//                     <Switch>
//                         <Route exact path="/" component={Home}/>
//                         <Route exact path="/contactus" component={Contact}/>
//                         <Route exact path="/auth" component={Auth}/>
//                         <Route exact render={() => <h3>oops 404</h3>}/>
//                     </Switch>
//                 </div>
//             </BrowserRouter>
//         </Provider>
//     );
// }


// export default App;



// const asyncCheckout = asyncComponent(() => {
//     return import('./containers/Checkout/Checkout');
//   });
  
//   const asyncOrders = asyncComponent(() => {
//     return import('./containers/Orders/Orders');
//   });
  
  const asyncAuth = asyncComponent(() => {
    return import('./containers/Auth/Auth');
  });
  
  class App extends Component {
    componentDidMount () {
      this.props.onTryAutoSignup();
    }
  
    render () {
      let routes = (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contactus" component={Contact}/>
            <Route exact path="/auth" component={Auth}/>
            <Redirect exact render={() => <h3>oops 404</h3>}/>
            <Route path="/auth" component={asyncAuth} />
        </Switch>
      );
  
      if ( this.props.isAuthenticated ) {
        routes = (
          <Switch>
            {/* <Route path="/checkout" component={asyncCheckout} />
            <Route path="/orders" component={asyncOrders} /> */}
            <Route path="/logout" component={Logout} />
            <Route path="/auth" component={asyncAuth} />
            {/* <Route path="/" exact component={BurgerBuilder} /> */}
            <Redirect to="/" />
          </Switch>
        );
      }
  
      return (
        <div>

             {routes}

        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignup: () => dispatch( actions.authCheckState() )
    };
  };
  
  export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
  

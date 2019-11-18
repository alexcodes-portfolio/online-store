import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './Home/HomeView';
import LoginView from './User/LoginView';
import SignupView from './User/SignupView';
import CartView from './Cart/CartView';
import ProductView from './Product/ProductView';
import CategoryView from './Category/CategoryView';
import SearchResultsView from './Search/SearchResultsView';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import Error404 from './404';
import { MainContainer } from '../StyledComponents/Layout';

/**
 * props: onLoginStatusChange, currentUser, cart, updateCart, search, searchResults, clearSeach, toggleModal
 */
class Main extends Component { 
         
    render(){
        const props = this.props;

        return (
            <MainContainer fluid>                
                <Switch> 
                    <Route exact path='/' component={HomeView} />
                    <Route path='/login'
                        render={
                            routeProps => <LoginView {...props} {...routeProps} />
                        }
                    />
                    <Route path='/signup' 
                        render={
                            routeProps => <SignupView {...props} {...routeProps} />
                        } 
                    />
                    <Route path='/cart' 
                        render={
                            () => <CartView {...props} />
                        }
                    />                    
                    <Route path='/search/:search' 
                        render={
                            () => <SearchResultsView {...props} />
                        } 
                    />  
                    <Route path='/category/:category' component={CategoryView} />
                    <Route path='/product/:productId' 
                        render={                        
                            routeProps => <ProductView {...props} {...routeProps}  />
                        } 
                    />  
                    <Route path='/privacypolicy' component={PrivacyPolicy} />
                    <Route component={Error404} />                       
                </Switch>
            </MainContainer>
        );
    }
}

export default Main;
import React, { Component } from 'react';
import '../StyledComponents/GridBreakpoints.css';
import GlobalStyle from '../StyledComponents/GlobalStyle';
import { Wrapper } from '../StyledComponents/Elements';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Header from './Header/Header';
import Modal from './Core/Modal/CustomModal';
import Main from './Main';
import ScrollToTopButton from './Core/Buttons/ScrollToTopButton';
import UserAPI from '../API/UserAPI';
import Auth from './User/Auth';
import ProductAPI from '../API/ProductAPI';
import RedirectToSearch from './Search/RedirectToSearch';
import CartAPI from '../API/CartAPI';
import { createBrowserHistory } from 'history';
import { throttle } from 'lodash';
import Disclaimer from './PrivacyPolicy/Disclaimer';

/**
 * state: user, search, searchResults, searchCleared, cart, cartUpdateRequired, modal, displayArrow
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      searchResults: [],
      cart: [],
      redirectToSearch: false,
      displayArrow: false,
      modal: {
        isOpen: false
      }
    };
  }

  componentDidMount(){
    //handle the situation when the search results are loaded based on the path (search/...), not on the search form input (when you navigate to this path)
    this.initSearchOnLoad();

    //is the user ID stored in local storage?
    if (Auth.isAuthenticated){
      UserAPI.getUser()
      .then(
        user => {
          this.setState({
            user
          });
          this.updateCart();
        })
        .catch(err => err);
    } else {
      this.updateCart();
    }

    window.addEventListener('scroll', this.handleScrollThrottled);
  } 

  componentDidUpdate(prevProps, prevState){
    if (prevState.user !== undefined && this.state.user === undefined) {
      Auth.signOut();
    }

    //clear cart after logout
    if(!this.state.user && this.state.cart === prevState.cart){
      this.updateCart();
    }

    if (this.state.cartUpdateRequired){
      this.setState({
        cartUpdateRequired: false
      });
      this.updateCart();
    }    
  }

  /**
   * ------------------------------------
   * handle LOGIN 
   * ------------------------------------
   */

  handleLoginStatusChange = user => {
    this.setState({
      user
    });
    
    //join carts only if the user is logging in, not out
    if (user !== undefined) {
      this.joinCarts(user);    
    }
  };

  /**
   * ----------------------------------------
   * handle CART 
   * ----------------------------------------
   */

  //join the cart used before logging in and the cart from the user account
  joinCarts(user) {
    CartAPI.getCartFromStorage()
    .then(cart => {
      if (cart.length > 0) {
        //add items from the cart in storage into the user cart
        cart.forEach(item => {
          CartAPI.addToCart({
            userId: user.id,
            product: item,
            productId: item.productId,
            selectedSize: item.selectedSize,
            selectedQuantity: item.selectedQuantity
          })  
          .then(() => CartAPI.getCart(user))
          .then(cart => this.setState({
            cartUpdateRequired: true
          }))
        });//END forEach 
            
      } else {
        //load cart if no products were added to the cart before log in
        this.setState({
          cartUpdateRequired: true
        });
      }
    });
  }

  updateCart = () => {
    return CartAPI.getCart(this.state.user)
      .then(cart => {
       //sort items in cart alphabeticaly so that articles of the same type but diff. size are placed next to each other no matter when they are added
        this.sort(cart);
        this.setState({
            cart: cart
        })
      }).catch(
        err => err
      ); 
  }

  sort(items){
    items.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
      return 0;
    });
  }

 /**
  * ---------------------------------------------
  * handle SEARCH 
  * ---------------------------------------------
  */
  //get search results from the "database"
  loadSearchResults (searchVal) {
    ProductAPI.search(searchVal).then(
      results => {
        this.setState({
          searchResults: results,
          search: searchVal
        });
      }
    );
  }

  //if a new search value was submitted, store the search and its result in the state, otherwise return
  handleSearchSubmit = value => {    
    if (this.state.search == value) {
     return;
    }    
    this.loadSearchResults(value);    
  };

  //after component has mounted:
  initSearchOnLoad() {
    let { pathname: initPath } = createBrowserHistory().location;
    if (initPath.includes('search')) {
      let value = initPath.match(/\w+$/)[0];
      this.loadSearchResults(value);
    }
  }

  //reset search and search results after SearchResults component unmounts
  clearSearch = () => {
    this.setState({
      search: '',
      searchResults: []
    });
  };

  //handle page scrolling
  handleScroll = () => {
    let status = window.pageYOffset > 0 ? true : false;
    if (this.state.displayArrow === status) return;

    this.setState({
        displayArrow: status
    });
  };

  handleScrollThrottled = throttle(this.handleScroll, 500);

  componentWillUnmount() {
    this.handleScrollThrottled.cancel();
  }

  /**
   * --------------------------------
   * MODAL
   * --------------------------------
   */

  toggleModal = (modal = false) => {
    //initially set to false to hide modal
    this.setState({
      modal
    });
  }
  
  render(){
    const { search, searchResults, cart, user, displayArrow, modal } = this.state;  

    const props = {
      onLoginStatusChange: this.handleLoginStatusChange,
      currentUser: user,
      cart,
      search,
      onSearchSubmit: this.handleSearchSubmit,
      toggleModal: this.toggleModal
    };    

    return (
      <Wrapper>

        <GlobalStyle />

        <Header  
          {...props}  
        />
        <Modal  
          {...modal} toggleModal={this.toggleModal} 
        />
        <Main 
          {...props} updateCart={this.updateCart} clearSearch={this.clearSearch} searchResults={searchResults} 
        />
        <Disclaimer />
        {search && 
          <RedirectToSearch search={search} />
        }
        {displayArrow &&
          <ScrollToTopButton />
        }
        
      </Wrapper>
    );
  }
}

export default App;
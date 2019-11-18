import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

/**
 * props: search
 */
class RedirectToSearch extends Component{
   
    shouldComponentUpdate(nextProps){
        //prevent from redirecting if search has not been changed
        return (
            this.props.search !== nextProps.search
        );
    } 

    render(){
        const { search } = this.props;        
        return (
            <Redirect to={`/search/${search}`} /> 
        );             
    }
}

export default RedirectToSearch;
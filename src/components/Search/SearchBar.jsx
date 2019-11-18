import React, { Component } from 'react';
import { FormGroup } from 'reactstrap';
import { SearchForm, SearchInput } from '../../StyledComponents/SearchForm';

/**
 * props: onSearchSubmit, search, styles
 * state: inputVal
 */
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'inputVal': ''
        };
    }

    handleChange = (e) => {
        this.setState({
            inputVal: e.target.value
        });
    }

     handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.inputVal);
    }

    componentDidUpdate(prevProps, prevState){
        const { search } = this.props;
        const { inputVal } = this.state;
        //reset search input value after leaving the search results page 
        if ((search !== prevProps.search) && ! search){
            this.setState({
                inputVal: ''
            });
        }

        //update value in header search bar if a new value is submitted via main search bar
        if ( (inputVal === prevState.inputVal) && (search !== prevProps.search) ){
            this.setState({
                inputVal: search
            })
        }
    }

    render(){
        
        return (
            <SearchForm inline positioned={this.props.positioned} onSubmit={this.handleSubmit}>
                <FormGroup>
                    <SearchInput value={this.state.inputVal} onChange={this.handleChange} />
                </FormGroup>
            </SearchForm>
        );
    }
}

export default SearchBar;
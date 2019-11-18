import React, { Component } from 'react';
import List from '../Core/List/List';
import NotFound from '../Core/NotFound/NotFound';
import SearchBar from './SearchBar';

/**
 * props: search, searchResults, onSearchSubmit, clearSearch, cart, updateCart, currentUser, onLoginStatusChange
 */
class SearchResultsView extends Component {

    componentWillUnmount() {
        //reset search and search results
        this.props.clearSearch();
    }

    render(){
        const { search, searchResults, onSearchSubmit } = this.props;
        if (searchResults.length > 0) {
            return (
                <List title={`Search results for: ${search}`} items={searchResults} />
            );
        }
        
        return (
            <NotFound
                heading={`Showing results for ${search}`}
                subheadings={[
                    `No results found for "${search}".`,
                    `Try another search?`
                ]}
            >
                <SearchBar search={search} onSearchSubmit={onSearchSubmit} />
            </NotFound>
        );
    }
}
export default SearchResultsView;
import React, { Component } from 'react';
import { Carousel } from 'reactstrap';
import ProductCarouselItem from './ProductCarouselItem';
import { CenteredRow } from '../../../StyledComponents/Layout';
import { StyledCarouselItem as CarouselItem, StyledCarouselControl as CarouselControl } from '../../../StyledComponents/Carousel';

/**
 * props: lgScreen, products
 * state: activeIndex, rows
 */
class ProductsCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeIndex: 0, 
            rows: [] 
        };
    }

    /**
     * REACTSTRAP METHODS
     */
        
    onExiting = () => {
        this.animating = true;
    };
    
    onExited = () => {
        this.animating = false;
    };
    
    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.rows.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    };
    
    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.rows.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    };

    /**
     * CUSTOM CAROUSEL METHODS
     */

    componentDidMount(){
        
        //display 1 or 3 products in a row depending on screen size
        this.props.lgScreen?
            this.splitProductsIntoRows()
        :
            this.setState({
                rows: this.props.products
            });
    }

    splitProductsIntoRows(){
        const { products } = this.props;
        const itemsPerRow = 3;
        const rowsNumber = this.calculateRowsNumber(products.length);
        const rowsArraySkeleton = Array(rowsNumber).fill();
        //rowsArraySkeleton: [undefined, undefined, undefined...]

        const rowsArray = rowsArraySkeleton.map((item, index) => {
            return products.slice(index,  index + itemsPerRow);
        });
         //rowsArray:[ [{...}, {...}, {...}], [{...}, {...}, {...}], ...]

        this.setState({
            rows: rowsArray
        });
    } 

    calculateRowsNumber(rowsNumber, productsNumber = rowsNumber){
        if (productsNumber <= 3) return 1;
        
        return (productsNumber - rowsNumber <= 1)?
            this.calculateRowsNumber(--rowsNumber, productsNumber)
        :
            rowsNumber;
    }

    render(){
        const { activeIndex } = this.state;
        const slides = this.state.rows.map( (row, index) => {
            //return an array with 3 products or a single product obj
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={index}
                    slide={false}
                    tag={({...props})=> <CenteredRow noGutters {...props}/>}
                >
                    <ProductCarouselItem content={row} lgScreen={this.props.lgScreen} />
                </CarouselItem>
        )});
        
        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                interval={false} //stop autoplay
                slide={false}
            >
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        );
    }
}

export default ProductsCarousel;
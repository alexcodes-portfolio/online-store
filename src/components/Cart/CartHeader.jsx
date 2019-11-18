import React from 'react';
import CustomCol from '../Core/CustomCol';
import { CartHeaderRow } from '../../StyledComponents/Cart';
import { ColumnHeading } from '../../StyledComponents/SubHeading';

const CartHeader = () => (
    <CartHeaderRow noGutters>
        <CustomCol md="5">
            <ColumnHeading>Your order</ColumnHeading>
        </CustomCol>
        <CustomCol md="2">
            <ColumnHeading>Price</ColumnHeading>
        </CustomCol>
        <CustomCol md="2">
            <ColumnHeading>Quantity</ColumnHeading>
        </CustomCol>
        <CustomCol md="2">
            <ColumnHeading>Total</ColumnHeading>
        </CustomCol>
    </CartHeaderRow>
);

export default CartHeader;
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs"
import { addTocart, clearCart, decreaseCart, getTotals, removeFromCart } from '../redux/cartSlice';

export const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [dispatch, cart])

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleDecreasedCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    const handleIncreasedCart = (cartItem) => {
        dispatch(addTocart(cartItem))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }
   
    return (
        <Container>
            <Wrapper>
                <Header>Shopping Cart</Header>
                {
                    cart.cartItems.length === 0 ? (
                        <Empty>
                            <Para>Your cart is currently empty</Para>
                            <Shop to="/">
                                <span><BsArrowLeft /></span>
                                Start Shopping
                            </Shop>
                        </Empty>
                    ) : (
                        <CartHolder>
                            <Headings>
                                <Title>Product</Title>
                                <Price>Price</Price>
                                <Quantity>Quantity</Quantity>
                                <Total>Total</Total>
                            </Headings>
                            <Items>
                                {
                                    cart.cartItems?.map((cartItem) => (
                                        <Item key={cartItem.id}>
                                            <CartProduct>
                                                <Image src={cartItem.image} alt={cartItem.name} />
                                                <Details>
                                                    <Name>{cartItem.name}</Name>
                                                    <Desc>{cartItem.desc}</Desc>
                                                    <Button onClick={() => handleRemoveFromCart(cartItem)}>Remove</Button>
                                                </Details>
                                            </CartProduct>
                                            <CartPrice>${cartItem.price}</CartPrice>
                                            <CartQauntity>
                                                <ButtonQty onClick={() => handleDecreasedCart(cartItem)}>-</ButtonQty>
                                                <Count>{cartItem.cartQuantity}</Count>
                                                <ButtonQty onClick={() => handleIncreasedCart(cartItem)}>+</ButtonQty>
                                            </CartQauntity>
                                            <CartTotalPrice>
                                                ${cartItem.price * cartItem.cartQuantity}
                                            </CartTotalPrice>
                                        </Item>
                                    ))
                                }
                            </Items>
                            <CartSummary>
                                <ButtonSummary onClick={() => handleClearCart()}>Clear Cart</ButtonSummary>
                                <CartSummaryCheckout>
                                    <SummarySubTotal>
                                        <SubTotal>SubTotal</SubTotal>
                                        <Amount>${cart.cartTotalAmount}</Amount>
                                    </SummarySubTotal>
                                    <CheckoutPara>Taxes and shipping calcukated at checkout</CheckoutPara>
                                    <ButtonCheckout>Check Out</ButtonCheckout>
                                    <Holder>
                                        <CartShop to="/">
                                           <span> <BsArrowLeft /></span>
                                            Continue Shopping
                                        </CartShop>
                                    </Holder>
                                </CartSummaryCheckout>
                            </CartSummary>
                        </CartHolder>
                    )
                }
            </Wrapper>
        </Container>
    )
}

const Holder = styled.div`
margin-top: 1rem;
`;

const CartShop = styled(Link)`
color: gray;
text-decoration: none;
display: flex;
align-items: center;

span {
    margin-right: 5px;
    display: flex;
    align-items: center;
}
`;

const ButtonCheckout = styled.button`
width: 100%;
height: 40px;
padding: 10px 25px;
border-radius: 5px;
font-weight: 400;
border: 0px;
outline: none;
background: #011834;
color: #fff;
cursor: pointer;
letter-spacing: 1.15px;
`

const CheckoutPara = styled.p`
font-size: 14px;
font-weight: 200;
margin: 0.5rem 0;
`;

const Amount = styled.span`
font-weight: 700;
padding-right: 0.5rem;
justify-self: right;
`;

const SubTotal = styled.span``;

const SummarySubTotal = styled.div`
display: flex;
justify-content: space-between;
font-size: 20px;
`;

const CartSummaryCheckout = styled.div`
width: 270px;
max-width: 100%;
`;

const ButtonSummary = styled.button`
width: 130px;
max-width: 100%;
height: 40px;
border-radius: 5px;
font-weight: 400;
letter-spacing: 1.15px;
border: 0.5px solid #011834;
color: #011834;
background: transparent;
cursor: pointer;
`;

const CartSummary = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid rgb(187, 187, 187);
padding-top: 2rem;
`;

const Count = styled.div`
padding: 0.7rem 0;
`;

const ButtonQty = styled.button`
border: 0px;
outline: none;
background: none;
padding: 0.7rem 1.5rem;
cursor: pointer;
font-size: 16px;
`;

const CartTotalPrice = styled.div`
justify-self: right;
padding-right: 0.5rem;
font-weight: 700;
`;

const CartQauntity = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
width: 130px;
max-width: 100%;
border: 0.5px solid rgb(177, 177, 177);
border-radius: 5px;
`;

const CartPrice = styled.div`

`;

const Button = styled.button`
border: 0px;
outline: none;
margin-top: 0.7rem;
cursor: pointer;
background: #011834;
color: #fff;
padding: 10px 25px;
border-radius: 5px;
`;

const Desc = styled.div``;

const Details = styled.div``;

const Name = styled.h3`
font-weight: 400;
`;

const Image = styled.img`
width: 150px;
max-width: 100%;
margin-right: 1rem;
`;
 
const CartProduct = styled.div`
display: flex;
`;

const Item = styled.div`
display: grid;
align-items: center;
grid-template-columns: 3fr 1fr 1fr 1fr;
column-gap: 0.5rem;
border-top: 1px solid rgb(187, 187, 187);
padding: 1rem 0;
`;

const Items = styled.div``;

const Total = styled.h3`
font-size: 14px;
font-weight: 400px;
text-transform: uppercase;
padding-right: 0.5rem;
justify-self: right;
`;

const Quantity = styled.h3`
font-size: 14px;
font-weight: 400px;
text-transform: uppercase;
`;

const Price = styled.h3`
font-size: 14px;
font-weight: 400px;
text-transform: uppercase;
`;
const Title = styled.h3`
font-size: 14px;
font-weight: 400px;
text-transform: uppercase;
padding-left: 0.5rem;
`;
const Headings = styled.div`
display: grid;
align-items: center;
grid-template-columns: 3fr 1fr 1fr 1fr;
column-gap: 0.5rem;
margin: 2rem 0 1rem 0;
`;

const CartHolder = styled.div`
margin: 2rem 0;

`;

const Shop = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
color: rgb(84, 84, 84);
span {
    margin-right: 5px;
    display: flex;
    align-items: center;
}
`;

const Para = styled.p``;

const Empty = styled.div`
font-size: 20px;
margin-top: 2rem;
color: rgb(84, 84, 84);
display: flex;
flex-direction: column;
align-items: center;
`;

const Header = styled.h2`
font-size: 40px;
text-align: center;
font-weight: 400;
`;

const Wrapper = styled.div`
width: 100%;
`;

const Container = styled.div`
padding: 2rem 4rem;
width: 100%;
height: 100%;
`;

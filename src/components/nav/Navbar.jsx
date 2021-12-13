import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' 

export const Navbar = () => {
    const {cartTotalQuantity} = useSelector(state => state.cart)
    return (
        <Container>
            <Wrapper>
                <LogoHolder to="/">
                    Elina-Space
                </LogoHolder>
                <Navigation>
                    <Nav to="cart">
                        <Qty>
                            <BsCart3 style={{
                                width: "35px",
                                height: "35px"
                            }} />
                            <span>{cartTotalQuantity}</span>
                        </Qty>   
                    </Nav>
                </Navigation>
            </Wrapper> 
        </Container>
    )
}

const Qty = styled.span`
display: flex;
align-items: center;

span {
    background: #ffaf30;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 14px;
    font-weight: 700;
    margin-left: 3px;
}
`;

const Nav = styled(Link)`
text-decoration: none;
color: #fff;

`;

const Navigation = styled.div`
display: flex;
align-items: center;
`;

const LogoHolder = styled(Link)`
font-size: 40px;
font-weight: bold;
text-decoration: none;
color: #fff;
`;

const Wrapper = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 4rem;
`;

const Container = styled.div`
width: 100%;
height: 70px;
background: #000;
color: #fff;
`;
 
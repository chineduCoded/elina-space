import React from 'react'
import styled from 'styled-components'
import { useGetAllProductsQuery } from './redux/productsApi'
import { useDispatch } from 'react-redux'
import { addTocart } from './redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import { Loading } from './redux/ReactLoading'

export const Home = () => {
    const {data, error, isLoading } = useGetAllProductsQuery();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleAddTocart = (product) => {
        dispatch(addTocart(product));
        navigate("cart")
    }
    return (
        <Container>
            <Wrapper>
                { isLoading ? (
                    <Para>
                        <Loading/>
                    </Para>
                ) : error ? (
                    <Para>An error occured..</Para>
                ) : (
                    <>
                    <Header>New Arrivals</Header>
                    <Products>
                        {data?.map((product) => (
                            <Card key={product.id}>
                                <Title>{product.name}</Title>
                                <Image src={product.image} alt={product.name} />
                                <Details>
                                    <Desc>{product.desc}</Desc>
                                    <Price>${product.price}</Price>
                                </Details>
                                <Button onClick={() => handleAddTocart(product)}>Add To Cart</Button>
                            </Card>
                        ))}
                    </Products>
                    </>
                )
                }
            </Wrapper>
        </Container>
    )
}

const Button = styled.button`
// width: 100%;
// height: 40px;
padding: 10px 25px;
border-radius: 5px;
font-weight: 400;
border: 0px;
outline: none;
background: #011834;
color: #fff;
cursor: pointer;
letter-spacing: 1.15px;
`;

const Price = styled.div`
font-size: 20px;
font-weight: 700;
`;

const Desc = styled.div``;

const Details = styled.div`
margin: 1rem 0px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Image = styled.img`
width: 80%;
height: 55%;
object-fit: contain;
object-position: 50% 50%;
margin-top: 1rem;
`;

const Title = styled.h3`
font-size: 25px;
font-weight: 400;
`;

const Card = styled.div`
width: 300px;
max-width: 100%;
height: 400px;
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 1rem auto;
padding: 1rem;
border-radius: 10px;
box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 2px 2px 
5px rgba(94, 104, 121, 0.3); 
`;

const Products = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 2rem;
`;

const Header = styled.h2`
font-size: 40px;
text-align: center;
font-weight: 400;
`;

const Para = styled.p`
display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;
`;

const Wrapper = styled.div`
width: 100%;
`;

const Container = styled.div`
padding: 2rem 4rem;
width: 100%;
height: 100%;
`

import React from 'react'
import styled from 'styled-components'
import img from '../assets/404.png'
import { useNavigate } from 'react-router-dom'

export const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        
        <Container>
            <Wrapper>
                    <ImageHolder>
                        <Image src={img}/>
                    </ImageHolder>
                   <Header>
                       page not found! Go back to <span onClick={() => {
                           navigate("/")
                       }}>Home Page</span>
                   </Header>
            </Wrapper>
        </Container>
    )
}

const Header = styled.h2`
text-transform: capitalize;
display: flex;
justify-content: center;

span {
    margin-left: 5px;
    color: rgb(68, 68, 68);
    font-weight: bold;
    cursor: pointer;
}
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const ImageHolder = styled.div`
width: 600px;
height: 400px;
`;

const Wrapper = styled.div`
min-height: 80vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
`;



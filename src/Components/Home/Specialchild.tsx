import React from 'react'
import styled from "styled-components"
import kid from "../images/specialKid.png"
import logo from "../images/logo3.png"

const Specialchild = () => {
  return (
   <Container>
    <Wrapper>
        <Logo>
            <img src= {kid} alt="" />
            
        </Logo>
        <Div>
            <Logo2>
                <img src={logo} alt="" />
            </Logo2>
            <h1>Special offers in kids products</h1>
            <p>Fashion is a form of self-expression and autonomy at a particular period and place.</p>
            <button>Get Started</button>
        </Div>
    </Wrapper>
   </Container>
  )
}

export default Specialchild

const Logo2 = styled.div`
width: 100px;
height: 70px;

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}


`
const Div = styled.div`
width: 500px;
display: flex;
flex-direction:column;
justify-content: center;

h1{
    margin: 0;
    font-size:3rem;
    color:#0F172A;
    margin-bottom: 30px;
}

p{
    color: #6E8191;
    margin-bottom: 20px;
}
button{
    width:200px;
    height: 60px;
    border:none;
    border-radius: 50px;
    background-color:#0F172A;
    color:#fff;
    font-size:16px;
    font-weight:bold;
}
`
const Logo = styled.div`
width: 500px;
height: 100%;
/* background-color: red; */

img{
    width: 100%;
    height: 100%;
}
`
const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: center;
background-color: #FEFCE8;
border-radius: 30px;
`
const Container = styled.div`
width: 100%;
/* height: 500px; */
justify-content: center;
display: flex;

`

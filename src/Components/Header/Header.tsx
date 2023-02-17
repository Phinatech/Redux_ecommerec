import React from 'react'
import styled from "styled-components"
import {AiOutlineSearch} from "react-icons/ai"
import {BsCart} from "react-icons/bs"
import {RxPerson} from "react-icons/rx"
import pic from "../images/logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    
    
        <Container>
       <Wrapper>
       <Logo>
            <img src={pic} alt="" />
        </Logo>
        <Navhold>
          <Nav>Home </Nav>

          <NavLink to="/about">
          <Nav>About</Nav>
          </NavLink>

          <Nav>Service</Nav>
          <Nav>Product</Nav>
          
        </Navhold>
            
           

        <IconHold>
            <Icon>
                <AiOutlineSearch/>
            </Icon>
            <Icon>
                <RxPerson/>
            </Icon>
            <Icon>
                <BsCart/>
            </Icon>
            <button>Buy now</button>
        </IconHold>
    
       </Wrapper>
        </Container>
    
  )
}

export default Header

const Nav = styled.div`
margin-left:20px;
`
const Navhold = styled.div`
display: flex;
align-items: center;
`
const Icon = styled.div`
margin-right:20px;
`
const IconHold = styled.div`
display: flex;
align-items: center;

button{
    width: 100px;
    height:40px;
    border: 0;
    border-radius:5px;
    background-color: #7AA93C;
    color: #fff;
    cursor: pointer;
}
`
const Logo = styled.div`
width:150px;
height:50px;

object-fit:contain;


img{
    width:100%;
    height: 100%;
    /* object-fit: cover; */
}
`

const Wrapper = styled.div`
width: 95%;
height:60px;
display: flex;
justify-content: space-between;
align-items: center;

`
const Container = styled.div`
width:100%;
height:60px;
display: flex;
align-items: center;
justify-content: center;
background-color:#fff;
position: fixed;


`

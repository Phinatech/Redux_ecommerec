import React from 'react'
import styled from "styled-components"
import {AiOutlineSearch} from "react-icons/ai"
import {BsCart} from "react-icons/bs"
import {RxPerson} from "react-icons/rx"
import pic from "../images/logo.png"
import { NavLink, Link } from 'react-router-dom'
import { UseAppDispach, useAppSelector } from '../Global/Store'
import { logoutUser } from '../Global/ReduxState'

const Header = () => {
    const userData = useAppSelector((state)=> state.myReducer.currentUser);
    const dispatch = UseAppDispach();

    const readCartQuantity = useAppSelector(
        (state)=> state.myReducer.totalQuantity
    )
  return (
    
        <Container>
       <Wrapper>
       <Logo>
            <img src={pic} alt="" />
        </Logo>
        <Navhold>
          <NavLink to= "/" style={{"textDecoration": "none"}}>
          <Nav>Home </Nav>
          </NavLink>

          <Nav>About</Nav>
        

          <Nav>Service</Nav>

       
     <NavLink to= "/products" style={{"textDecoration": "none"}}>
     <Nav>Product</Nav>
     </NavLink>
      
        </Navhold>
        <IconHold>
            <Icon>
                <AiOutlineSearch/>
            </Icon>
            <Icon>
                <RxPerson/>
            </Icon>
         <NavLink to="/cart" style={{"textDecoration": "none"}}>
         <Icon>
                <BsCart/>
                <Count>{readCartQuantity}</Count>
            </Icon>
         </NavLink>
       {userData?.name ? (
        <NavLink
        onClick={()=>{
            dispatch(logoutUser())
        }}
         to="/register">
              <button>Log out</button>
        </NavLink>
       ):(  <NavLink to= "/register">
       <button>Get Stated</button>
       </NavLink>)}
        
        </IconHold>
    
       </Wrapper>
        </Container>
    
  )
}

export default Header

const Count = styled.div`
height: 15px;
width: 15px;
background-color: lightblue;
font-size: 10px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
`
const Nav = styled.div`
margin-left:20px;
`
const Navhold = styled.div`
display: flex;
align-items: center;
`
const Icon = styled.div`
margin-right:20px;
display: flex;
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
height:100%;
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
/* position: fixed; */
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`

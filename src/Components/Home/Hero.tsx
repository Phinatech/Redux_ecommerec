import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from "react-icons/ai"
import img from "../images/img1.png"


const Hero = () => {
  return (
   <Container>
    <Wrapper>
        <Div1>
            <p>In this season, find the best 🔥</p>
            <h1>Exclusive collection <br/> for everyone</h1>
           
            <button>
                Explore now  <AiOutlineSearch/>
            </button>
           
          
        </Div1>
        <Div2>
            <img src={img} alt="" />
        </Div2>
    </Wrapper>
   </Container>  )
}

export default Hero

const Buttonhold = styled.div`
width: 150px;
height:80px;
background-color: black;
border:0;

`
const Div2 = styled.div`
width: 600px;
/* background-color: red; */
img{
    width:100%;
    height: 100%;
}
`
const Div1 = styled.div`
/* width: 500px; */
margin: 0;
/* background-color: yellow; */
h1{
    margin: 0;
    font-size:60px;
    margin-bottom: 30px;
    color:#0F172A;
}

p{
    margin:0;
    font-size: 20px;
    margin-bottom: 30px;
}
button{
    width: 170px;
    height: 50px;
    border:0;
    background-color:#0F172A;
    color:white;
    border-radius: 50px;
    align-items: center;
    display: flex;
    font-size: 17px;
    font-weight: bold;
    justify-content: space-around;
    margin-left: 5px;
}
`
const Wrapper = styled.div`
width: 95%;

display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
    width:100%;
    height:calc(100vh - 70px);
    display: flex;
    justify-content: center;
    background-color: #E3FFE6;
`
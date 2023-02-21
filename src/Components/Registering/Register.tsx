import React from 'react'
import styled from 'styled-components'


import * as yup from "yup"



const Register = () => {
const dispatch = UseAppDista

  return (
    <Container>
      <Card>
        <h3>Register</h3>
          <input placeholder='Please enter your name' />
		  <p></p>
          <input placeholder='Please enter your email' />
          <input placeholder='Please enter your Password' />
          <MainButton>Register</MainButton>
      </Card>
    </Container>
  )
}

export default Register

const MainButton = styled.button`
	height: 45px;
	width: 200px;
	background-color: #123456;
	color: white;
	font-size: 17px;
	font-weight: 700;
	border: none;
	outline: none;
	border-radius: 30px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	cursor: pointer;
	margin-top: 20px;
`
const Card = styled.div`
margin-top: 20px;
  padding: 20px;
	height: 300px;
	width: 400px;
	border: 1px solid #f1f1f1;
  
	input {
		height: 35px;
		width: 90%;
		margin: 10px;
		border: 1px solid #f1f1f1;
		outline: border;
		/* :focus {
			border-color: red;
		} */
	}
`
const Container = styled.div`	
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
`

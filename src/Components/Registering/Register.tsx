import React from 'react'
import styled from 'styled-components'



import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { CreateUser } from "../Api/Api";
import { UseAppDispach } from "../Global/Store";
import { loginUser } from "../Global/ReduxState";
import { useNavigate } from 'react-router-dom';



const Register = () => {
const dispatch = UseAppDispach();
const Navigate = useNavigate()
const schema = yup
.object({
	name: yup.string().required("field must be required"),
	email: yup.string().email().required(),
	password: yup.string().min(9).required(),
})
.required();
type formData = yup.InferType<typeof schema>;

	const {
		handleSubmit,
		formState: { errors },
		reset,
		register,
	} = useForm<formData>({
		resolver: yupResolver(schema),
	});

	const post = useMutation({
		mutationKey: ["postUser"],
		mutationFn: CreateUser,
		onSuccess: (data) => {
			console.log(data.data);
			dispatch(loginUser(data.data));
		},
	});

	const Submit = handleSubmit((data) => {
		post.mutate(data);
		Navigate("/")
		reset();
	});

  return (
    <Container>
      <Card onSubmit={Submit}>
        <h3>Register</h3>
          <input {...register("name")} placeholder='Please enter your name' />
		  <p>{errors?.name && errors?.name?.message} </p>
          <input {...register("email")} placeholder='Please enter your email' />
		  <p>{errors?.email && errors?.email?.message} </p>
          <input {...register("password")} placeholder='Please enter your Password' />
		  <p>{errors?.password && errors?.password?.message} </p>
          <MainButton type="submit">Register</MainButton>
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
const Card = styled.form`
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

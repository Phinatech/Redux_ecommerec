import axios from "axios";

const Endpoint = "htttp://localhost:4573";

interface UserData{
  name:string;
  email:string;
  password:string
}

export const CreateUser = async({name,email,password}: UserData)=>{
  return await axios
  .post(`${Endpoint}/api/register`,{
    name,
    email,
    password
  })
  .then((res)=> res.data);
}

export const Allproduct = async () => {
  return await axios.get(`${Endpoint}/api/products`).then((res) =>res.data);
};

export const SingleProduct = async ()=>{
  return await axios
  .get(`${Endpoint}/api/products/${id}`)
  .then((res)=> res.data);
}
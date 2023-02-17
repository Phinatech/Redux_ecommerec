import React from 'react'
import styled from 'styled-components'
import pic from "../Components/images/pic1.png"

interface ProsDate{
    title:string
    subtittle:string
    img:string
    bg:string
    bgcol:string
}

const PropsCard:React.FC<ProsDate> = ({title,subtittle,img,bg,bgcol}) => {
  return (
    <Box bg={bg} bgcol ={bgcol}>
    <Left>
      <p>{title}</p>
      <h3>{subtittle}</h3>
      <button>Show me all</button>
      </Left>
    <Right>
    <img src={img} alt="" />
    </Right>
  </Box>
  )
}

export default PropsCard
const Left  = styled.div`

p{
  
    font-size: 16px;
    margin: 0;
    margin-bottom: 10px;
    margin-top: 15px;
}

h3{
    font-size:20px;
    width:200px;
    font-weight: 800;
    margin: 0;
    margin-bottom: 50px;
}

button{
    width: 130px;
    height:50px;
    border:none;
    background-color:#fff;
    border-radius: 50px;
    font-weight:bold;
 

}
`
const Right  = styled.div`
/* width: 400px; */

img{
    width:100%;
    height:100%;
    object-fit: cover;
}
`
const Box = styled.div<{bg: string, bgcol: string}>`
/* margin: 10px; */
width: 390px;
border-radius: 10px;
display: flex;
/* align-items: center; */
/* justify-content: center; */
padding: 10px;
background-color: ${(props)=> props.bg} ;


:hover{
  background-color: ${(props)=>props.bgcol};
  cursor: pointer;
}

`
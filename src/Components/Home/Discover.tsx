import React from 'react'
import styled from 'styled-components'
import pic from "../images/pic1.png"
import pic2 from "../images/pic3.png"
import pic3 from "../images/pic4.png"
import PropsCard from '../PropsCard'

const Discover = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Upper>
                        Discover more. <span>Good things are waiting for you</span>
                </Upper>
                <Lower>
               <PropsCard 
                title='Explore new arrivals'
                bg='#FEFCE8 '
                subtittle='Shop the Lastest from top Brands' 
                img={pic}
                bgcol= '#e7e3b1 '/> 

                <PropsCard 
                title='Digital gift Cards' 
                bg='#FEF2F2' 
                subtittle='Give the gift of choice' 
                img={pic2}
                bgcol= '#e6cccc'/>

                 <PropsCard 
                title='Sale collectiion' 
                bg='#EFF6FF' 
                subtittle='Up to 80% off retail' 
                img={pic3}
                bgcol= '#c1dafa'/> ;
                </Lower>
               
            </Wrapper>
        </Container>
    </div>
  )
}

export default Discover


const Lower = styled.div`
/* width: 100%; */

display: flex;
justify-content: space-between;
/* margin-right: 20px; */

`
const Upper = styled.div`
font-size: 35px;
margin: 0;
font-weight:600;
margin-bottom: 20px;
margin-top: 20px;
span{
    color: #6B7280;
}
`
const More = styled.div``
const Wrapper = styled.div`
width: 95%;
display: flex;
justify-content: center;

flex-direction: column;

`
const Container = styled.div`
width: 100%;
display: flex;
margin-bottom: 50px;
justify-content: center;
`
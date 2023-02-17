import React from "react";
import styled from "styled-components";
import CardProductProps from "../Props/CartProductProps";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import pic from "../../images/hero.png"
import { AiOutlineCheck } from "react-icons/ai";
import SummaryProps from "../Props/SummaryProps";

const Cart = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            <Title>Shopping Cart</Title>
            <Split>
              Homepage / Clothing Categories / <span> Shopping Cart</span>
            </Split>
          </Head>
          <br />
          <br />
          <Body>
            <Product>
              <CardProductProps
                price={778}
                dp={pic}
                name="Round Buckle 1'' Belt"
                status="Sold Out"
                sign={<MdOutlineDoNotDisturb />}
              />
              <CardProductProps
                price={778}
                dp={pic}
                name="Round Buckle 1'' Belt"
                status="Sold Out"
                sign={<MdOutlineDoNotDisturb />}
              />
              <CardProductProps
                price={778}
                dp={pic}
                name="Round Buckle 1'' Belt"
                status="In Stock"
                sign={<AiOutlineCheck />}
              />
              <CardProductProps
                price={778}
                dp={pic}
                name="Round Buckle 1'' Belt"
                status="Sold Out"
                sign={<MdOutlineDoNotDisturb />}
              />
            </Product>
            <Summary>
              <SummaryProps />
            </Summary>
          </Body>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Cart;
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: calc(100vw - 200px);
`;
const Head = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #d1cece;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 38px;
`;
const Split = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  color: #686666;
  span {
    text-decoration: underline;
  }
`;
const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Product = styled.div`
  margin-right: 50px;
`;
const Summary = styled.div`
  flex: 1;
  position: relative;
`;

import React from "react";
import styled from "styled-components";
import { MdOutlineDoNotDisturb } from "react-icons/md";

const SummaryProps = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Order Summary</Title>
          <Summaries>
            <Records>
              <TextDiv>Subtotal</TextDiv>
              <NumberDiv>$3663</NumberDiv>
            </Records>
            <Records>
              <TextDiv>Shipping extimate</TextDiv>
              <NumberDiv>$3663</NumberDiv>
            </Records>
            <Records>
              <TextDiv>Tax estimate</TextDiv>
              <NumberDiv>$3663</NumberDiv>
            </Records>
            <Records2>
              <TextDiv2>Order Total</TextDiv2>
              <NumberDiv2>$3663</NumberDiv2>
            </Records2>
          </Summaries>
          <Button>
            <button>Checkout</button>
          </Button>
          <Ending>
            <div>
              <MdOutlineDoNotDisturb />
            </div>
            <div>
              Learn more <span>Taxes</span> and <span>Shipping</span>
              Information
            </div>
          </Ending>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SummaryProps;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-left: 1px solid #e4eaee;
  margin-top: 40px;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #272727;
`;
const Summaries = styled.div`
  margin-top: 17px;
`;
const Records = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4eaee;
  font-weight: 500;
  font-size: 14px;
`;
const Records2 = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 20px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;

  button {
    height: 50px;
    background-color: #12122c;
    color: white;
    border: none;
    outline: none;
    border-radius: 40px;
    width: 100%;
    font-weight: bold;
    font-size: 17px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;
const Ending = styled.div`
  margin-top: 25px;
  font-size: 15px;
  color: grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    text-decoration: underline;
    font-weight: 500;
    color: #272727;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
const TextDiv = styled.div`
  color: grey;
`;
const TextDiv2 = styled.div`
  color: #272727;
  font-size: 16px;
  font-weight: 700;
`;
const NumberDiv2 = styled.div`
  font-weight: 700;
  color: #272727;
  font-size: 16px;
`;
const NumberDiv = styled.div`
  font-weight: 600;
  color: #272727;
`;

import React from "react";
import styled from "styled-components";
import { VscPaintcan } from "react-icons/vsc";
import { BsArrowsAngleExpand } from "react-icons/bs";

interface iprops {
  price: number;
  dp: any;
  name: string;
  status: string;
  sign: any;
}

const CardProductProps: React.FC<iprops> = ({
  price,
  dp,
  name,
  status,
  sign,
}) => {
  return (
    <div>
      <Container>
        <Pic>
          <img src={dp} />
        </Pic>
        <Details>
          <Detail>
            <Name>{name}</Name>
            <About>
              <Div>
                <Sign2>
                  <VscPaintcan />
                </Sign2>
                <>Black</>
              </Div>
              <div>
                <Sign2>
                  <BsArrowsAngleExpand />
                </Sign2>
                <>2XL</>
              </div>
            </About>
          </Detail>
          <Info>
            <Sign>{sign}</Sign>
            <div>{status}</div>
          </Info>
        </Details>
        <Buttons>
          <button>-</button>
          <div>1</div>
          <button>+</button>
        </Buttons>
        <Price>
          <PriceDiv>${price}</PriceDiv>
          <Remove>Remove</Remove>
        </Price>
      </Container>
    </div>
  );
};

export default CardProductProps;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 660px;
  border-bottom: 1px solid #dce1eb;
  padding-bottom: 40px;
  margin-top: 40px;
`;
const Pic = styled.div`
  width: 130px;
  height: 150px;
  background-color: #e3f2ff;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const Details = styled.div`
  margin-left: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Detail = styled.div``;
const Name = styled.div`
  font-size: 16px;
`;
const About = styled.div`
  font-weight: normal;
  font-size: 13px;
  margin-top: 10px;
  display: flex;

  div {
    display: flex;
  }
`;
const Info = styled.div`
  border-radius: 20px;
  border: 1px solid #dce1eb;
  max-width: 75px;
  padding: 3px;
  font-weight: normal;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Buttons = styled.div`
  margin-left: 60px;
  display: flex;
  align-items: center;
  max-height: 35px;
  button {
    border: 1px solid grey;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    outline: none;
    background-color: white;
    color: grey;
    margin-left: 10px;
    margin-right: 10px;
    transition: all 350ms;
    :hover {
      border: 1px solid black;
    }
  }
  div {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Price = styled.div`
  margin-left: 60px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PriceDiv = styled.div`
  border: 2px solid #1ac022;
  padding: 8px;
  max-height: 9px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1ac022;
  font-weight: bold;
  font-size: 14px;
`;
const Remove = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #4f86fc;
`;
const Div = styled.div`
  border-right: 1px solid #dce1eb;
  padding-right: 20px;
  margin-right: 20px;
  display: flex;
`;
const Sign = styled.div`
  display: flex;
  align-items: center;
  color: #646363;
`;
const Sign2 = styled.div`
  display: flex;
  align-items: center;
  color: #646363;
  margin-right: 7px;
`;

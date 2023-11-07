// import { useState } from "react";
import { format } from "date-fns";
import styled from "styled-components";

import logo from "@/assets/BubbleChart/logo_gray.svg";
import PackBubble from "@/components/molecules/packbubble";
const BubbleChart = () => {
  // const [selectDate, setSelectDate] = useState(new Date());
  const date = new window.Date();

  return (
    <Container>
      <Date>
        <p className="firstLine">{format(date, "yyyy")}년</p>
        <p className="secondLine">
          {format(date, "M")}월 {format(date, "dd")}일의
        </p>
        <img
          src={logo}
          alt="광장"
        />
      </Date>

      <PackBubble />
      <Title>
        <p className="firstLine">지금</p>
        <p className="secondLine">세상은?</p>
      </Title>
    </Container>
  );
};

export default BubbleChart;

//여기서 달력이랑 title 붙이기

const Container = styled.div`
  width: 100%; // 기본 100%  반응형 작업할 때 400Px로 잡기
  display: flex;
  justify-content: center;
  position: relative;
`;

const Date = styled.div`
  color: var(--Gray1_50, #fafafa);
  text-align: right;
  font-size: 2.5rem;
  line-height: 52px;
  position: absolute;
  top: 69px; //원래 70인데 레전드의 높이가 70px이라
  right: 120px; // 여기서 버블차트 width 바뀔 때마다 여기도 바꿔주야함.
  z-index: 1;
  img {
    margin-top: 12px;
  }
  @media (max-width: 400px) {
    top: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    .firstLine,
    .secondLine {
      margin-right: 10px;
    }
    img {
      width: 60px;
    }
  }
`;

const Title = styled.div`
  p {
    background-color: #000;
    width: fit-content;
    padding: 13px;
  }
  p.firstLine {
    padding-bottom: 0;
  }
  font-weight: 700;
  color: var(--Gray1_50, #fafafa);
  font-size: 4rem;
  position: absolute;
  bottom: 69px; //원래 70인데 레전드의 높이가 70px이라
  left: 120px; // 여기서 버블차트 width 바뀔 때마다 여기도 바꿔주야함.

  @media (max-width: 400px) {
    bottom: 120px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
  }
`;

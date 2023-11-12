// import { useState } from "react";
import { format } from "date-fns";
import styled from "styled-components";

import bg from "@/assets/BubbleChart/bubble_bg.svg";
import logo from "@/assets/BubbleChart/logo_gray.svg";
import PackBubble from "@/components/molecules/packbubble";
const BubbleChart = () => {
  // const [selectDate, setSelectDate] = useState(new Date());
  const date = new window.Date();

  return (
    <Container>
      <PackBubble />
      <BubbleCover>
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
        <Title>
          <p className="firstLine">지금</p>
          <p className="secondLine">세상은?</p>
        </Title>
        <div className="blackContainer"></div>
      </BubbleCover>
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
  background-image: url(${bg});
`;

const BubbleCover = styled.div`
  width: 1080px; // 여기 반응형 작업 잘하기
  height: 474px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Date = styled.div`
  margin-top: 27px;
  color: var(--Gray1_50, #fafafa);
  text-align: right;
  font-size: 1.75rem;
  line-height: 38px;
  img {
    margin-top: 8px;
    width: 60px;
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
    background-color: var(--Gray10_900);
    width: fit-content;
    padding: 13px;
  }
  p.firstLine {
    padding-bottom: 0;
  }
  font-weight: 600;
  color: var(--Gray1_50, #fafafa);
  font-size: 3rem;

  position: absolute;
  bottom: 0;

  @media (max-width: 400px) {
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
  }
`;

import { useState } from "react";

import styled from "styled-components";

import arrow from "@/assets/bottom_arrow.svg";
export const LineGraph = () => {
  const [showGraph, setShowGraph] = useState<boolean>(false);
  return (
    <Container>
      <ToggleBox>
        <div className="title">
          <div className="first">후쿠시마 오염수</div>는{" "}
          <div className="second">2022년 7월 1일</div> 가장 많이 검색됐어요.
        </div>
        <button
          className="toggleBtn"
          onClick={() => setShowGraph(!showGraph)}
        >
          <p>그래프로 자세히 보기</p>
          <img
            className={showGraph ? "up" : ""}
            src={arrow}
            alt="Y"
          />
        </button>
      </ToggleBox>
      {/* {showGraph ? <ShowLineGraph></ShowLineGraph> : ""} */}
      <ShowLineGraph $showGraph={showGraph}></ShowLineGraph>
    </Container>
  );
};

const Container = styled.div`
  width: 100%; // 기본 100%  반응형 작업할 때 400Px로 잡기
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: var(--Gray3_200);
`;
const ToggleBox = styled.div`
  width: 1080px;
  height: 78px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 27px;
  box-sizing: border-box;
  background: var(--Gray1_50, #fafafa);

  .title {
    color: var(--Gray7_600, #757575);
    font-size: var(--text_h6);
    line-height: 28px;
    display: flex;
  }
  .title .first {
    color: var(--Gray10_900, #212121);
    font-weight: 700;
  }
  .title .second {
    color: var(--Main_Blue, #0084ff);
    font-weight: 600;
    margin: 0 5px;
  }

  .up {
    transform: rotate(180deg);
  }

  button {
    border: none;
    border-radius: 55px;
    background: var(--Gray3_200, #eee);
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
`;

const ShowLineGraph = styled.div<{ $showGraph: boolean }>`
  transition: height 0.1s;
  width: 1080px;
  height: ${(props) => (!props.$showGraph ? "0" : "400px")};
  background-color: red;
  transition: 2s;
`;

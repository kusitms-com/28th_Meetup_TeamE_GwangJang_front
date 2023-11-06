import styled from "styled-components";
export const Container = styled.div`
  width: 282px;
  height: 361px;
  margin-left: 50px;
  position: relative;
  .topicBackground {
    width: 100%;
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
export const Main = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    filter: blur(2px);
    -webkit-filter: blur(2px);
    overflow: hidden;
  }
  /* filter: blur(3px); */
`;
export const Title = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: var(--Main_Blue);
  .text {
    padding: 18px 0 0 20px;
    width: 80px;
    white-space: wrap;
    color: var(--Gray1_50, #fafafa);
    font-weight: 700;
    font-size: var(--text_h5);
    line-height: 34px;
  }
  .donut {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .plus {
    z-index: 2;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;

export const Hover = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.7;
  border-radius: 5px;
  background-color: #242424;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  .text {
    padding: 18px 0 0 20px;
    width: 80px;
    white-space: wrap;
    color: var(--Gray1_50, #fafafa);
    font-weight: 700;
    font-size: var(--text_h5);
    line-height: 34px;
  }
`;

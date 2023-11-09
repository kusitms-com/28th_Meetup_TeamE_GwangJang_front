import styled from "styled-components";

export const ContentContainer = styled.div<{ $hover: boolean }>`
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  width: 344px;
  /* height: 240px; */
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;

  //hover
  filter: ${(props) => (props.$hover ? "blur(2px)" : undefined)};
  -webkit-filter: ${(props) => (props.$hover ? "blur(2px)" : undefined)};

  height: 100%;

  .tag-box {
    gap: 6px;
    display: ${(props) => (props.$hover ? "none" : "flex")};
  }

  .text-box {
    flex-direction: column;
    gap: 8px;
    display: ${(props) => (props.$hover ? "none" : "flex")};

    p {
      color: var(--Gray4_300, #d9d9d9);
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
      font-weight: 700;
      line-height: 22px; /* 157.143% */
      letter-spacing: -0.21px;

      //임시
      font-size: 14px;
    }

    .content-title {
      color: #fff;
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
      font-weight: 600;
      line-height: 28px; /* 155.556% */
      letter-spacing: -0.27px;

      //임시
      font-size: 18px;
    }
  }
`;

export const HoverContent = styled.div<{ $hover: boolean }>`
  opacity: ${(props) => (props.$hover ? "1" : "0")};
  background-color: rgba(36, 36, 36, 0.7);
  width: 90%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;

  padding: 18px;
  /* box-sizing: border-box; */

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* gap: 44px; */

  //text
  .article-text {
    height: 70%;
    opacity: 1;
    color: red;
    z-index: 2;
    color: #fff;
    overflow: hidden;
    font-size: var(--text_b1);
    line-height: 32px;
    letter-spacing: -0.27px;
  }

  .article-img {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: right;
  }
`;

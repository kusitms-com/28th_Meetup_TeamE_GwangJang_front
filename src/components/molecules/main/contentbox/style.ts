import styled from "styled-components";

export const ContentContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  /* width: 384px; */
  /* height: 240px; */
  border-radius: 5px;

  .tag-box {
    display: flex;
    gap: 6px;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      color: var(--Gray4_300, #d9d9d9);
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
      font-size: 14px;
      font-weight: 700;
      line-height: 22px; /* 157.143% */
      letter-spacing: -0.21px;
    }

    .content-title {
      color: #fff;
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
      font-size: 18px;
      font-weight: 600;
      line-height: 28px; /* 155.556% */
      letter-spacing: -0.27px;
    }
  }
`;

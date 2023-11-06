import styled from "styled-components";

export const TopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 220px;
  flex-shrink: 0;
  border-radius: 5px;
  opacity: 0.8;
  background: #343434;
  color: var(--White);
  padding: 20px;

  .topic-title {
    color: var(--White);
    font-size: var(--text_h4);
    font-weight: 700;
    line-height: 42px; /* 131.25% */
    letter-spacing: -0.48px;
    margin-top: 12px;
  }

  .subscribe {
    color: var(--Gray2_100, #f5f5f5);
    display: flex;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.21px;

    p {
      color: var(--Gray2_100, #f5f5f5);
      font-size: 14px;
      font-weight: 700;
      line-height: 22px; /* 157.143% */
      letter-spacing: -0.21px;
    }
  }
`;

import styled from "styled-components";

export const SubscribeModalContainer = styled.div`
  border-radius: 5px;
  background: var(--White, #fff);
  width: 522px;
  height: 162px;
  box-shadow: 0px 15px 55px 0px rgba(66, 66, 66, 0.35);
  display: flex;
  flex-direction: column;

  .noti-title {
    margin-top: 26px;
    text-align: center;
    display: flex;
    justify-content: center;
    //text
    color: var(--Gray10_900, #212121);
    text-align: center;
    font-size: var(--text_b1);
    line-height: 28px;
    letter-spacing: -0.3px;
    font-weight: 600;

    p {
      font-weight: 600;
      color: var(--Main_Blue, #0084ff);
    }
  }

  .button-wrapper {
    margin-top: 26px;
    display: flex;
    justify-content: center;
    gap: 24px;

    .red-button {
      cursor: pointer;
      width: 198px;
      height: 56px;
      border-radius: 5px;
      background: var(--Error_3, #ffeeed);
      //text
      color: var(--Error_50, #dc362e);
      text-align: center;
      font-size: var(--text_b1);
      font-weight: 600;
    }

    .gray-button {
      cursor: pointer;
      width: 198px;
      height: 56px;
      border-radius: 5px;
      background: var(--Gray2_100, #f5f5f5);

      //text
      color: var(--Gray9_800, #424242);
      text-align: center;
      font-size: var(--text_b1);
      font-weight: 600;
    }
  }
`;

import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

export const NoticeModalContainer = styled.div`
  border-radius: 5px;
  background: var(--White, #fff);
  width: 713px;
  height: 200px;
  box-shadow: 0px 15px 55px 0px rgba(66, 66, 66, 0.35);
  display: flex;
  flex-direction: column;

  .noti-title {
    margin-top: 43px;
    text-align: center;

    //text
    color: var(--Gray10_900, #212121);
    text-align: center;
    font-size: var(--text_h6);
    line-height: 28px;
    letter-spacing: -0.3px;
  }

  .button-wrapper {
    margin-top: 43px;
    display: flex;
    justify-content: center;
    gap: 24px;

    .blue-button {
      cursor: pointer;
      width: 252px;
      height: 56px;
      border-radius: 5px;
      background: var(--blue, #eaf5ff);

      //text
      color: var(--Main_Blue, #0084ff);
      text-align: center;
      font-size: var(--text_b1);
      font-weight: 600;
    }

    .gray-button {
      cursor: pointer;
      width: 252px;
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

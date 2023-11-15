import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 85px;
  left: 0;
  right: 0;
  //transform: translateY(-135px);
  width: 1080px;
  border-radius: 5px;
  z-index: 1;
  background: var(--Gray1_50, #fafafa);
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .subscribeText {
    color: var(--Gray7_600, #757575);
    font-size: var(--text_b3);
    line-height: 22px;
    display: flex;
    margin-bottom: 9px;
  }
  .subscribeText p {
    color: var(--Main_Blue, #0084ff);
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.div`
  color: var(--Gray10_900, #212121);
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 42px;
  margin: 12px 0 16px;
`;

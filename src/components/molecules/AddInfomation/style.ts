import styled from "styled-components";

export const Container = styled.div`
  width: 370px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 44px;
  .kakaoText {
    color: var(--Gray6_500, #959595);
    font-size: var(--text_h6);
    line-height: 28px;
    margin-bottom: 17px;
  }
  .addInfo {
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;
    white-space: pre;
    text-indent: 43px;
  }
`;

export const AddInfoBox = styled.div`
  .title {
    color: var(--Gray10_900);
  }
  .parityCheck {
    display: flex;
    justify-content: space-between;
    font-size: var(--text_cap1);
    p {
      font-size: var(--text_cap1);
    }
  }
  p {
    font-size: var(--text_b3);
  }
  .caption {
    font-size: var(--text_cap1);
  }
  .error {
    color: var(--Error_50, #dc362e);
  }
  .success {
    color: var(--Main_Blue, #0084ff);
  }
`;

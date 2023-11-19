import styled from "styled-components";

export const MyPageTabContainer = styled.div`
  width: 712px;
  height: 47px;
  display: flex;
  gap: 30px;
  border-bottom: 1px solid var(--Gray4_300, #d9d9d9);
  margin: 20px 0px;

  .tab-text {
    color: var(--Gray6_500, #959595);
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;
    letter-spacing: -0.36px;
    cursor: pointer;
  }

  .tab-focused {
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;
    letter-spacing: -0.36px;
    cursor: pointer;
  }

  .focus-bottom {
    margin-top: 12.5px;
    border-bottom: 2px solid var(--Gray10_900);
  }

  .not-focused {
    margin-top: 10px;
    border-bottom: 2px solid var(--Gray3_200);
  }
`;

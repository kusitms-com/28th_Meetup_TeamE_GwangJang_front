import styled from "styled-components";

export const CommentContainer = styled.div`
  width: 836px;
  /* height: 185px; */
  /* background: var(--Gray1_50, #fafafa); */
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .comment-text {
    color: var(--Gray8_700, #616161);
    font-size: var(--text_b2);
    line-height: 27px;
    letter-spacing: -0.24px;
    overflow: hidden;
  }

  @media (max-width: 836px) {
    width: 100%;
  }
`;

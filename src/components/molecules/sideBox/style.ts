import styled from "styled-components";

export const SideBoxContainer = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    color: var(--Gray7_600, #757575);
    border-radius: 5px;
    font-size: var(--text_b2);
    line-height: 24px;
    letter-spacing: -0.24px;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background: var(--Gray3_200, #eee);
      color: var(--Gray10_900, #212121);
      font-size: var(--text_b2);
      font-weight: 600;
    }
  }
`;

import styled from "styled-components";

export const MoreBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  color: var(--Gray7_600, #757575);
  font-size: 16px;
  cursor: pointer;

  .onClick-item {
    display: flex;
    align-items: center;
    text-align: center;

    .next-icon {
      color: inherit;
      font-size: 20px;
    }
  }
`;

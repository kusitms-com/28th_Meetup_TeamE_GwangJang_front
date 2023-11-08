import styled from "styled-components";

export const Tag = styled.div<{ background: string }>`
  display: inline-flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 55px;
  background: ${(props) => props.background};

  //text
  color: var(--Gray1_50, #fafafa);
  text-align: center;
  font-size: var(--text_cap1);
  font-weight: 600;
  line-height: 18px; /* 150% */
  letter-spacing: -0.18px;
`;

export const Keyword = styled.div<{ color: string }>`
  display: inline-flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 55px;
  color: ${(props) => props.color};
  background: var(--Gray1_50, #fafafa);

  //text
  text-align: center;
  font-size: var(--text_cap1);
  font-weight: 600;
  line-height: 18px; /* 150% */
  letter-spacing: -0.18px;
`;

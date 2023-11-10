import styled from "styled-components";

const Footer = () => {
  return <Container></Container>;
};

export default Footer;

const Container = styled.div`
  background-color: var(--Gray9_800);
  height: 262px;
  width: 100%;
  @media (max-width: 564px) {
    height: 122px;
  }
`;

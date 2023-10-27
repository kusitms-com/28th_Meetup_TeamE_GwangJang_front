import styled from "styled-components";

import { Inner } from "@/style/global";

const Header = () => {
  return (
    <Container>
      <Inner>
        <div>header</div>
        <div>header</div>
      </Inner>
    </Container>
  );
};

export default Header;
export const Container = styled.div`
  background-color: var(--Main_Blue);
  display: flex;
`;

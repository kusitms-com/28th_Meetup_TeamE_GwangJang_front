import styled from "styled-components";

import Register from "@/components/molecules/register";

const Signup = () => {
  return (
    <Container>
      <Register />
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 162px;
  padding-bottom: 83px;
`;

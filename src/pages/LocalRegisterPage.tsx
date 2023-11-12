import styled from "styled-components";

import Register from "@/components/molecules/register";

const LocalRegisterPage = () => {
  //이메일 회원가입 페이지
  return (
    <Container>
      <Register />
    </Container>
  );
};

export default LocalRegisterPage;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding-bottom: 83px;
`;

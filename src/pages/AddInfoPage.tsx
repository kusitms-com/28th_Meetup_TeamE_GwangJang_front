import styled from "styled-components";

import AddInfomation from "@/components/molecules/AddInfomation";

const AddInfoPage = () => {
  return (
    <Container>
      <AddInfomation />
    </Container>
  );
};

export default AddInfoPage;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding-bottom: 83px;
`;

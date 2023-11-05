import styled from "styled-components";

import PackBubble from "@/components/molecules/packbubble";

const BubbleChart = () => {
  return (
    <Container>
      <PackBubble />
    </Container>
  );
};

export default BubbleChart;

//여기서 달력이랑 title 붙이기

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

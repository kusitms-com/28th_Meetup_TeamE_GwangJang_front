import styled from "styled-components";

import bg from "@/assets/DetailTitle/detail-background.png";
import { DetailCommunityBox } from "@/components/molecules/detailCommunityBox";
import { envirData } from "@/dummy/AreaData";

const DetailCommunityTitle = () => {
  return (
    <Container>
      <img
        src={bg}
        alt="배경이미지"
        width="100%"
        height={220}
      />
      <DetailCommunityBox data={envirData[0]} />
    </Container>
  );
};

export default DetailCommunityTitle;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

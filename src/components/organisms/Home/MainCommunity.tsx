import styled from "styled-components";

import { Title } from "@/components/atoms/title";
import { SeeMore } from "@/components/atoms/more";
import { CommunityBox } from "@/components/molecules/main/communitybox";

export const MainCommunity = () => {
  return (
    <TempInner>
      <MainCommunityBack>
        {" "}
        <Title title="지금 가장 인기있는 커뮤니티 글" />
        <CommunityBox />
        <SeeMore text="더보기" />
      </MainCommunityBack>
    </TempInner>
  );
};

const MainCommunityBack = styled.div``;

const TempInner = styled.div`
  width: 1440px;
  height: 560px;
  background: var(--Gray4_300, #d9d9d9);
  margin: 0 auto;
`;

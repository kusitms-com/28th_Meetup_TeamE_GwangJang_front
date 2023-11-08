import styled from "styled-components";

import { SeeMore } from "@/components/atoms/more";
import { Title } from "@/components/atoms/title";
import { CommunityBox } from "@/components/molecules/main/communitybox";
import { Inner } from "@/style/global";

export const MainCommunity = () => {
  return (
    <TempInner>
      <MainCommunityBack>
        <Inner>
          <Title title="지금 가장 인기있는 커뮤니티 글" />
        </Inner>

        <CommunityBox />
        <Inner>
          <SeeMore text="더보기" />
        </Inner>
      </MainCommunityBack>
    </TempInner>
  );
};

const MainCommunityBack = styled.div`
  /* width: 1440px; */
  width: 100%;
  /* margin-left: 180px; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

const TempInner = styled.div`
  background: var(--Gray4_300, #d9d9d9);
  height: 525px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

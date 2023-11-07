import styled from "styled-components";

import { WhiteTitle } from "@/components/atoms/title";
import { CommunityBox } from "@/components/molecules/main/communitybox";
import { Inner } from "@/style/global";

export const MainCommunity = () => {
  return (
    <Inner>
      <MainCommunityBack>
        {" "}
        <WhiteTitle title="지금 가장 인기있는 커뮤니티 글" />
        <CommunityBox />
      </MainCommunityBack>
    </Inner>
  );
};

const MainCommunityBack = styled.div`
  height: 560px;
  background: var(--Gray7_600, #757575);
`;

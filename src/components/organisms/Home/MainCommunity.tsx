import styled from "styled-components";

import { WhiteTitle } from "@/components/atoms/title";
import { Inner } from "@/style/global";

export const MainCommunity = () => {
  return (
    <MainCommunityBack>
      <Inner>
        {" "}
        <WhiteTitle title="지금 가장 인기있는 커뮤니티 글" />
      </Inner>
    </MainCommunityBack>
  );
};

const MainCommunityBack = styled.div`
  width: 100%;
  height: 560px;
  background: var(--Gray7_600, #757575);
`;

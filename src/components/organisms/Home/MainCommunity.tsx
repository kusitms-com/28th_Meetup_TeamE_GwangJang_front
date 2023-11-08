import styled from "styled-components";

import { CommunityBox } from "@/components/molecules/main/communitybox";
import { Title } from "@/components/atoms/title";
// import { Inner } from "@/style/global";

export const MainCommunity = () => {
  return (
    // <Inner>
    <InnerBack>
      <MainCommunityBack>
        {" "}
        <Title title="지금 가장 인기있는 커뮤니티 글" />
        <CommunityBox />
      </MainCommunityBack>
    </InnerBack>
    // </Inner>
  );
};

const MainCommunityBack = styled.div`
  height: 560px;
  background: var(--Gray4_300, #d9d9d9);
`;
const InnerBack = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

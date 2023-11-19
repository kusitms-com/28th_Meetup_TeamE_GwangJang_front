import styled from "styled-components";

import { MyPageTitle } from "@/components/organisms/MyPage/MyPageTitle";
import { MySideBox } from "@/components/organisms/MyPage/MySideBox";
import { MyStatus } from "@/components/organisms/MyPage/MyStatus";

export const RealMyPage = () => {
  return (
    <OutWrapper>
      <MyPageTitle />
      <RealMyPageContainer>
        <MySideBox />
        <MyStatus />
      </RealMyPageContainer>
    </OutWrapper>
  );
};

export const OutWrapper = styled.div`
  width: 100%;
  background: var(--Gray3_200, #eee);
  margin: 0 auto;
`;

export const RealMyPageContainer = styled.div`
  display: flex;
  gap: 55px;
  width: 1080px;
  margin: 0 auto;
  padding: 40px 0px;
`;

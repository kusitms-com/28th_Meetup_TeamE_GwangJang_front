import styled from "styled-components";

import { MySideBox } from "@/components/organisms/MyPage/MySideBox";
import { MyStatus } from "@/components/organisms/MyPage/MyStatus";

export const RealMyPage = () => {
  return (
    <RealMyPageContainer>
      <MySideBox />
      <MyStatus />
    </RealMyPageContainer>
  );
};

export const RealMyPageContainer = styled.div`
  display: flex;
  gap: 55px;
  width: 1080px;
  margin: 40px auto;
`;

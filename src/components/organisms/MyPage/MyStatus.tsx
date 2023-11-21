import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { MyPageTab } from "@/components/molecules/mypageTab";
import { selectedTabState } from "@/recoil/atoms";

import { MyContent } from "./MyContent";
import { MyPost } from "./MyPost";

export const MyStatus = () => {
  const selectedTab = useRecoilValue(selectedTabState);

  return (
    <MyStatusWrapper>
      <MyPageTab />
      {/* mypost는 형식 똑같으니까 data props로 보내주는 방식으로..? */}
      {selectedTab === 0 && <MyPost />}
      {selectedTab === 1 && <MyContent />}
      {selectedTab === 2 && <MyPost />}
    </MyStatusWrapper>
  );
};

export const MyStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

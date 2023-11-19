import { useState } from "react";

import styled from "styled-components";

import { MyPageTab } from "@/components/molecules/mypageTab";

import { MyContent } from "./MyContent";
import { MyPost } from "./MyPost";

export const MyStatus = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (idx: number) => {
    setSelectedTab(idx);
  };

  console.log(selectedTab);

  return (
    <MyStatusWrapper>
      <MyPageTab onSelectTab={handleTabChange} />
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

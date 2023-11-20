import { useRecoilState } from "recoil";

import { selectedTabState } from "@/recoil/atoms";

import { SideBoxContainer, SideText } from "./style";

export const SideBox = () => {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabState);

  const handleTabChange = (idx: number) => {
    setSelectedTab(idx);
    console.log(selectedTab);
  };

  return (
    <SideBoxContainer>
      <SideText
        onClick={() => handleTabChange(0)}
        isSelected={selectedTab === 0}
      >
        작성한 커뮤니티 글
      </SideText>
      <SideText
        onClick={() => handleTabChange(1)}
        isSelected={selectedTab === 1}
      >
        좋아요한 콘텐츠
      </SideText>
      <SideText
        onClick={() => handleTabChange(2)}
        isSelected={selectedTab === 2}
      >
        좋아요한 커뮤니티 글
      </SideText>
    </SideBoxContainer>
  );
};

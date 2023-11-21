import { useRecoilState } from "recoil";

import { selectedTabState } from "@/recoil/atoms";

import { SideBoxContainer, SideText } from "./style";

export const SideBox = () => {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabState);

  const tabs = [
    { idx: 0, label: "작성한 커뮤니티 글" },
    { idx: 1, label: "좋아요한 콘텐츠" },
    { idx: 2, label: "좋아요한 커뮤니티 글" },
  ];

  const handleTabChange = (idx: number) => {
    setSelectedTab(idx);
    console.log(selectedTab);
  };

  return (
    <SideBoxContainer>
      {tabs.map((tab) => (
        <SideText
          key={tab.idx}
          onClick={() => handleTabChange(tab.idx)}
          isSelected={selectedTab === tab.idx}
        >
          {tab.label}
        </SideText>
      ))}
    </SideBoxContainer>
  );
};

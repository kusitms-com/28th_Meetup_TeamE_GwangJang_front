import { useRecoilState } from "recoil";

import { selectedTabState } from "@/recoil/atoms";

import { SideBoxContainer } from "./style";

export const SideBox = () => {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabState);

  const handleTabChange = (idx: number) => {
    setSelectedTab(idx);
    console.log(selectedTab);
  };

  return (
    <SideBoxContainer>
      <p onClick={() => handleTabChange(0)}>작성한 커뮤니티 글</p>
      <p onClick={() => handleTabChange(1)}>좋아요한 콘텐츠</p>
      <p onClick={() => handleTabChange(2)}>좋아요한 커뮤니티 글</p>
    </SideBoxContainer>
  );
};

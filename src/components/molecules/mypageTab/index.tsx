import { useRecoilState } from "recoil";

import { selectedTabState } from "@/recoil/atoms";

import { MyPageTabContainer } from "./style";

export const MyPageTab = () => {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabState);

  const tabName = [
    { name: "작성한 커뮤니티 글", content: "tab1" },
    { name: "좋아요한 콘텐츠", content: "tab2" },
    { name: "좋아요한 커뮤니티 글", content: "tab3" },
  ];

  const selectTab = (idx: number) => {
    setSelectedTab(idx);
  };

  return (
    <MyPageTabContainer>
      {tabName.map((item, idx) => {
        return (
          <div>
            <div
              className={idx === selectedTab ? "tab-focused" : "tab-text"}
              key={idx}
              onClick={() => selectTab(idx)}
            >
              {item.name}
            </div>
            <div className={idx === selectedTab ? "focus-bottom" : "not-focused"}></div>
          </div>
        );
      })}
    </MyPageTabContainer>
  );
};

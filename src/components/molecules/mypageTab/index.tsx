import { useState } from "react";

import { CategoryBarProps } from "@/types";

import { MyPageTabContainer } from "./style";

export const MyPageTab = ({ onSelectTab }: CategoryBarProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabName = [
    { name: "작성한 커뮤니티 글", content: "tab1" },
    { name: "좋아요한 콘텐츠", content: "tab2" },
    { name: "좋아요한 커뮤니티 글", content: "tab3" },
  ];

  const selectTab = (idx: number) => {
    setCurrentTab(idx);
    onSelectTab(idx);
  };

  return (
    <MyPageTabContainer>
      {tabName.map((item, idx) => {
        return (
          <div>
            <div
              className={idx === currentTab ? "tab-focused" : "tab-text"}
              key={idx}
              onClick={() => selectTab(idx)}
            >
              {item.name}
            </div>
            <div className={idx === currentTab ? "focus-bottom" : "not-focused"}></div>
          </div>
        );
      })}
    </MyPageTabContainer>
  );
};

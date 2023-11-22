import { useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

import { CategoryBarProps } from "@/types";

import { CategoryBarContainer, Container, SideBarContainer } from "./style";

export const CategoryBar = ({ onSelectTab }: CategoryBarProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  const areaList = [
    { name: "전체" },
    { name: "일자리 · 노동", color: "var(--Main_Blue)" },
    { name: "주거 · 사회 안전망", color: "var(--Sub_Purple)" },
    { name: "환경", color: "var(--Main_NeonGreen)" },
    { name: "교육", color: "var(--Sub_Orange)" },
  ];

  const selectTab = (idx: number) => {
    setCurrentTab(idx);
    onSelectTab(idx);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <CategoryBarContainer isShow={isOpen}>
        {areaList.map((el, idx) => {
          return (
            <div className="area-wrapper">
              <div
                className={idx === currentTab ? "tab-focused" : "tab"}
                key={idx}
                onClick={() => selectTab(idx)}
              >
                {el.name !== "전체" && (
                  <div
                    className="circle"
                    style={{ backgroundColor: el.color }}
                  ></div>
                )}
                <p>{el.name}</p>
              </div>
              <div className={idx === currentTab ? "focus-bottom" : "not-focused"}></div>
            </div>
          );
        })}
      </CategoryBarContainer>
      <SideBarContainer>
        {!isOpen ? (
          <MdMenu onClick={toggleSide} />
        ) : (
          <div className="close-btn">
            <IoCloseOutline onClick={toggleSide} />
          </div>
        )}
      </SideBarContainer>
    </Container>
  );
};

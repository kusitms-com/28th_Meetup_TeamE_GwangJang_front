import { useState } from "react";

import styled from "styled-components";

import { CategoryBar } from "@/components/molecules/categoryBar";
import { CommunityMainList } from "@/components/organisms/Community/CommunityMainList";
import CommunityPopular from "@/components/organisms/Community/CommunityPopular";
import CommunityTitle from "@/components/organisms/Community/CommunityTitle";
import CommunityTopTopic from "@/components/organisms/Community/CommunityTopTopic";
import { PopularCommunityData } from "@/dummy/PopularCommunityData";
import { ToptopicData } from "@/dummy/ToptopicData";
export const CommunityPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (idx: number) => {
    setSelectedTab(idx);
  };

  return (
    <>
      <CommunityTitle />
      <CategoryBar onSelectTab={handleTabChange} />
      <Bottom>
        <div className="inner">
          <CommunityMainList selectedTab={selectedTab} />
          <div className="sideCommunity">
            <CommunityPopular data={PopularCommunityData} />
            <CommunityTopTopic data={ToptopicData} />
          </div>
        </div>
      </Bottom>
    </>
  );
};

export const Bottom = styled.div`
  width: 100%;
  background-color: var(--Gray3_200, #eee);
  .inner {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 152px;
    justify-content: space-between;
  }
`;

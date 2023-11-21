import { useEffect, useState } from "react";

import styled from "styled-components";

import { CategoryBar } from "@/components/molecules/categoryBar";
import { CommunityMainList } from "@/components/organisms/Community/CommunityMainList";
import CommunityPopular from "@/components/organisms/Community/CommunityPopular";
import CommunityTitle from "@/components/organisms/Community/CommunityTitle";
import CommunityTopTopic from "@/components/organisms/Community/CommunityTopTopic";
import { EduData, envirData } from "@/dummy/AreaData";
import { PopularCommunityData } from "@/dummy/PopularCommunityData";
import { ToptopicData } from "@/dummy/ToptopicData";
import { CommunityItemProps } from "@/types";

export const CommunityPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [communityData, setCommunityData] = useState<CommunityItemProps[]>([]);

  useEffect(() => {
    switch (selectedTab) {
      case 0: // 전체 api 갖고와서 데이터 넣어주기
        // getCommunityAllData()
        //   .then((res) => {
        //     console.log(res.data);
        //     dataFetch = res.data;
        //   })
        //   .catch((err) => console.log(err));
        setCommunityData(envirData);

        break;
      case 1: // 일자리 · 노동
        setCommunityData(envirData);
        break;
      case 2: // 주거 · 사회 안전망
        setCommunityData(envirData);
        break;
      case 3: // 환경
        setCommunityData(envirData);
        break;
      case 4: // 교육
        setCommunityData(EduData);
        break;
      default:
        break;
    }
  }, [selectedTab]);

  return (
    <>
      <CommunityTitle />
      <CategoryBar onSelectTab={setSelectedTab} />
      <Bottom>
        <div className="inner">
          <CommunityMainList data={communityData} />
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

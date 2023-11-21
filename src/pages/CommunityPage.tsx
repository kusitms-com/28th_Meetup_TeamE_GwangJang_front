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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          {windowWidth > 1150 ? (
            <>
              <CommunityMainList data={communityData} />
              <div className="sideCommunity">
                <CommunityPopular data={PopularCommunityData} />
                <CommunityTopTopic data={ToptopicData} />
              </div>
            </>
          ) : (
            <div className="responsive-box">
              <div className="sideCommunity">
                <CommunityPopular data={PopularCommunityData.slice(0, 2)} />
                <div className="topic-data-box">
                  <CommunityTopTopic data={ToptopicData.slice(0, 2)} />
                </div>
              </div>
              <CommunityMainList data={communityData} />
            </div>
          )}
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

    @media (max-width: 1150px) {
      flex-direction: column;
      justify-content: center;
    }

    .responsive-box {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .sideCommunity {
      margin: 0 auto;

      .topic-data-box {
        @media (max-width: 1150px) {
          margin-top: 28px;
        }
      }

      @media (max-width: 1150px) {
        width: fit-content;
        justify-content: center;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 30px;
      }

      @media (max-width: 800px) {
        display: flex;
        gap: 0px;
        margin: 0 auto;
        flex-direction: column;
      }
    }
  }

  @media (max-width: 1150px) {
    display: flex;
    align-items: center;
  }
`;

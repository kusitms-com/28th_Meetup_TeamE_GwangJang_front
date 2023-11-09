import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import commentImg from "@/assets/comment.svg";
import likeImg from "@/assets/like.svg";
import temp from "@/assets/react.svg";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { mainCommunityData } from "@/dummy/mainCommunityData";

import { CommunityContainer } from "./style";

import "swiper/css";

export const CommunityBox = ({ category }: { category: string }) => {
  return (
    <TempContainer>
      <Swiper
        spaceBetween={24}
        slidesPerView={4.5}
        slidesPerGroup={3}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {mainCommunityData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={idx == 0 ? { marginLeft: "300px" } : {}}
          >
            <CommunityContainer>
              <div className="community-content">
                <div className="community-tag-wrapper">
                  <TopicTag
                    color="red"
                    category={category}
                  />
                  <KeywordTag
                    color="red"
                    category={category}
                  />
                </div>
                <div className="content-wrapper">
                  <div className="content-text">{item.communityText}</div>
                  <div className="status-info">
                    <div className="user-info">
                      <img
                        src={temp}
                        alt=""
                      />
                      <div>
                        <p className="user-nickname">{item.nickname}</p>
                        <p className="content-date">{item.date}</p>
                      </div>{" "}
                    </div>
                    <div className="content-review">
                      <div>
                        <img
                          src={likeImg}
                          alt="좋아요"
                        />
                        <p>{item.likeCount}</p>
                      </div>
                      <div>
                        <img
                          src={commentImg}
                          alt="좋아요"
                        />
                        <p>{item.commentCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quotation">
                <div className="quot-title">인용한 콘텐츠</div>
                <div className="quot-text">{item.quotText}</div>
              </div>
            </CommunityContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </TempContainer>
  );
};

const TempContainer = styled.div`
  /* width: 1440px; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

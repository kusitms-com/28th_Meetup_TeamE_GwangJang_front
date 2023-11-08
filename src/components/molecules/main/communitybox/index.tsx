import { Swiper, SwiperSlide } from "swiper/react";

import temp from "@/assets/react.svg";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { mainCommunityData } from "@/dummy/mainCommunityData";

import { CommunityContainer } from "./style";

import "swiper/css";

export const CommunityBox = () => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={3.5}
      slidesPerGroup={3}
      loop={true}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {mainCommunityData.map((item, idx) => (
        <SwiperSlide key={idx}>
          <CommunityContainer>
            <div className="community-content">
              <div className="community-tag-wrapper">
                <TopicTag color="red" />
                <KeywordTag color="red" />
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
                    <p>좋아요{item.likeCount}</p>
                    <p>댓글{item.commentCount}</p>
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

    // <CommunityContainer>
    //   <div className="community-content">
    //     <div className="community-tag-wrapper">
    //       <TopicTag color="red" />
    //       <KeywordTag color="red" />
    //     </div>
    //     <div className="content-wrapper">
    //       <div className="content-text">
    //         일기란 개인이 일상에서 체험하는 경험, 생각, 감상 등의 제반사항을 하루 단위로 기록하는
    //         비공식적, 사적 기록이다. 보통 일일 단위로 기록하지만, 작성하는 개인에 따라 천차만별이며,
    //         강제성이 있는이 일상에서 체험하는 경험, 생각, 감상 등의 제반사항을 하루 단위로 기록하는
    //         비공식적, 사적
    //       </div>
    //       <div className="status-info">
    //         <div className="user-info">
    //           <img
    //             src={temp}
    //             alt=""
    //           />
    //           <div>
    //             <p className="user-nickname">광장찌개닉네임</p>
    //             <p className="content-date">2023.10.24</p>
    //           </div>{" "}
    //         </div>
    //         <div className="content-review">
    //           <p>좋아요</p>
    //           <p>댓글</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="quotation">
    //     <div className="quot-title">인용한 콘텐츠</div>
    //     <div className="quot-text">인용 텍스트어어어어어어</div>
    //   </div>
    // </CommunityContainer>
  );
};

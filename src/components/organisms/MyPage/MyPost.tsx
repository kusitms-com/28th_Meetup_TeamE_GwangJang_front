import styled from "styled-components";

import { BigProfile } from "@/components/atoms/profile";
import { MainCommunityBox } from "@/components/molecules/mainCommunityBox";
import { envirData } from "@/dummy/AreaData";

export const MyPost = () => {
  return (
    <>
      {envirData.map((item, idx) => (
        <MyPostWrapper>
          <BigProfile
            nickname={item.nickname}
            date={item.date}
            profileImg={item.profileImg}
          />
          <MainCommunityBox
            key={idx}
            data={item}
          />
        </MyPostWrapper>
      ))}
    </>
  );
};

export const MyPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

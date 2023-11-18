import moment from "moment";

import { LongProfile } from "@/components/atoms/profile";
import { PopularCommunityProps } from "@/types";

import { Container } from "./style";

const PopularCommunityBox = ({ data }: { data: PopularCommunityProps }) => {
  return (
    <Container>
      <LongProfile
        nickname={data.nickname}
        profileImg={data.profileImg}
        date={moment(data.date).format("YYYY.MM.DD")}
      />
      <p className="text">{data.communityText}</p>
    </Container>
  );
};

export default PopularCommunityBox;

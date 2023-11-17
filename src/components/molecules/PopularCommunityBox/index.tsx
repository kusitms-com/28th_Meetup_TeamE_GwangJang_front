import { LongProfile } from "@/components/atoms/profile";

import { Container } from "./style";

const PopularCommunityBox = () => {
  return (
    <Container>
      <LongProfile
        nickname="aaa"
        profileImg="aa"
        date="12312"
      />
      <p className="text">
        SPC와 관련된 노동 또는 환경 문제를 고려하여 SPC 불매 운동을 지지하는 사람들은, 기업이 사회적
        책임을 SPC와 관련된 노동 또는 환경 문제를 고려하여 SPC 불매 운동을 지지하는 사람들은, 기업이
        사회적 책임을
      </p>
    </Container>
  );
};

export default PopularCommunityBox;

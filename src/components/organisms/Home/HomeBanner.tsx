import { MainCommunity } from "./MainCommunity";
import { MainContent } from "./MainContent";
import { MainTopic } from "./MainTopic";

const HomeBanner = () => {
  return (
    <>
      <MainTopic />
      <MainContent />
      <MainCommunity />
    </>
  );
};

export default HomeBanner;

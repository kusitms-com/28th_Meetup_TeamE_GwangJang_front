import BubbleChart from "@/components/organisms/Home/BubbleChart";
import DiscussedTopics from "@/components/organisms/Home/DiscussedTopics";
import { MainCommunity } from "@/components/organisms/Home/MainCommunity";
import { MainTopic } from "@/components/organisms/Home/MainTopic";

const Home = () => {
  return (
    <>
      <BubbleChart />
      {/* 여러가지 메인에 들어갈 organism들 */}
      <MainTopic />
      <DiscussedTopics />
      <MainCommunity />
    </>
  );
};

export default Home;

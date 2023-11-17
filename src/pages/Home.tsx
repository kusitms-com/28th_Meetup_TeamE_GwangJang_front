import BubbleChart from "@/components/organisms/Home/BubbleChart";
import DiscussedTopics from "@/components/organisms/Home/DiscussedTopics";
import { LoginTopic } from "@/components/organisms/Home/LoginTopic";
import { MainCommunity } from "@/components/organisms/Home/MainCommunity";
import { MainContent } from "@/components/organisms/Home/MainContent";
import { MainTopic } from "@/components/organisms/Home/MainTopic";

const Home = () => {
  return (
    <>
      <BubbleChart />
      {/* 여러가지 메인에 들어갈 organism들 */}
      {!localStorage.getItem("accessToken") ? <MainTopic /> : <LoginTopic />}
      <MainContent />
      <MainCommunity />
      <DiscussedTopics />
    </>
  );
};

export default Home;

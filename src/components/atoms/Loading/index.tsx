import { SyncLoader } from "react-spinners";

import { LoadingBox } from "./style";
const Loading = () => {
  return (
    <LoadingBox>
      <h3>잠시만 기다려주세요.</h3>
      <SyncLoader />
    </LoadingBox>
  );
};

export default Loading;

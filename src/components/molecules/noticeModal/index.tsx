import { useNavigate } from "react-router-dom";

import { ModalBackground, NoticeModalContainer } from "./style";

export const NoticeModal = () => {
  const navigate = useNavigate();

  const SpaceTo = (page: string) => {
    navigate(page);
  };

  return (
    <ModalBackground>
      <NoticeModalContainer>
        <div className="noti-title">게시글 작성이 완료되었어요.</div>
        <div className="button-wrapper">
          <button
            className="blue-button"
            onClick={() => SpaceTo("/community")}
          >
            커뮤니티 바로가기
          </button>
          <button
            className="gray-button"
            // onClick
          >
            계속 탐색하기
          </button>
        </div>
      </NoticeModalContainer>
    </ModalBackground>
  );
};

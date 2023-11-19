import { SubscribeModalContainer } from "./style";

export const SubscribeModal = () => {
  const subject = "이태원 참사";

  return (
    <SubscribeModalContainer>
      <div className="noti-title">
        <p>{subject}</p>
        &nbsp;주제 구독을 취소하시겠어요?
      </div>
      <div className="button-wrapper">
        <button className="red-button">구독 취소하기</button>
        <button className="gray-button">구독 계속하기</button>
      </div>
    </SubscribeModalContainer>
  );
};

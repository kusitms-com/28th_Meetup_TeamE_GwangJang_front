import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { PostingModal } from "@/components/molecules/postingModal";
import { ShowModalState } from "@/recoil/atoms";

export const QuotModal = () => {
  const setShowModal = useSetRecoilState(ShowModalState);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ModalBackground onClick={closeModal}>
      <PostingModal />
    </ModalBackground>
  );
};

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5000;
`;

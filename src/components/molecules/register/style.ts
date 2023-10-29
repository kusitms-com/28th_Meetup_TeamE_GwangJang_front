import styled from "styled-components";

export const Container = styled.div`
  width: 370px;
`;

export const RegisterTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--text_b3);
  p {
    font-size: var(--text_h4);
    font-weight: 700;
  }
`;
export const RegisterBox = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--text_b3);
  color: var(--Gray7_600, #757575);

  .title {
    color: var(--Gray10_900);
  }
  p {
    font-size: var(--text_b3);
  }
  .caption {
    font-size: var(--text_cap1);
  }
  .error {
    color: var(--Error_50, #dc362e);
  }
  .success {
    color: var(--Main_Blue, #0084ff);
  }

  .parityCheck {
    display: flex;
    justify-content: space-between;
    font-size: var(--text_cap1);
    p {
      font-size: var(--text_cap1);
    }
  }
`;

export const IdBox = styled.div`
  .inputId {
    position: relative;
  }
`;

export const PasswordBox = styled.div`
  position: relative;
`;
export const PasswordCheckBox = styled.div`
  position: relative;
`;

export const NicknameBox = styled.div`
  .inputNickname {
    position: relative;
  }
`;

export const EmailBox = styled.div`
  position: relative;
`;

export const EmailCodeBox = styled.div`
  position: relative;
  .inputEmailCode {
    position: relative;
  }

  .timer {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 70px;
    color: var(--Main_Blue, #0084ff);
    font-size: var(--text_b3);
  }

  .resend {
    display: flex;
    .caption2 {
      text-decoration: underline;
      color: var(--Gray9_800, #424242);
    }
  }
`;

export const BirthBox = styled.div``;

export const GenderBox = styled.div`
  .Btns {
    display: flex;
    gap: 6px;
  }
`;

export const SpaceToLogin = styled.div`
  display: flex;
  justify-content: center;
  .caption2 {
    text-decoration: underline;
    color: var(--Gray9_800, #424242);
  }
`;

export const DuplicateBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 20px;
  color: var(--Main_Blue);
  cursor: pointer;
`;

export const RequestBtn = styled.button`
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  width: 370px;
  height: 56px;
  border-radius: 5px;
  background-color: var(--Gray3_200);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (!props.disabled ? "var(--Main_Blue, #0084FF)" : "var(--Gray6_500)")};
  background-color: ${(props) => (!props.disabled ? "var(--blue, #eaf5ff)" : "var(--Gray3_200)")};
  font-weight: 600;
  font-size: var(--text_b1);
`;

export const EmailCodeCheckBtn = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  background: var(--Main_Blue, #0084ff);
  width: 42px;
  height: 28px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 16px;
  color: var(--White, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GenderCheckBtn = styled.div<{ gender: string; text: string }>`
  color: ${(props) =>
    props.gender === props.text ? "var(--Main_Blue, #0084FF)" : "var(--Gray6_500)"};
  background-color: ${(props) =>
    props.gender === props.text ? "var(--blue, #eaf5ff)" : "var(--Gray1_50, #fafafa)"};
  border: ${(props) =>
    props.gender === props.text
      ? "1px solid var(--Main_Blue, #0084ff)"
      : "1px solid var(--Gray4_300, #d9d9d9)"};
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  width: 182px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterBtn = styled.button`
  border: 0;
  padding: 0;
  font-family: "Pretendard"; // btn 태그 기본 속성 제거
  border-radius: 5px;
  background: var(--Gray3_200, #eee);
  color: var(--Gray6_500, #959595);
  /* background: var(--Main_Blue, #0084ff); 
  color: var(--White, #fff);*/
  height: 56px;
  width: 100%;

  font-weight: 600;
  font-size: var(--text_b1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

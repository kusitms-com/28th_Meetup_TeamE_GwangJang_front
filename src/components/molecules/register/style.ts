import styled from "styled-components";

export const Container = styled.div`
  width: 370px;
`;

export const RegisterTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--text_b3);
  margin-bottom: 40px;
  p {
    font-size: var(--text_h4);
    font-weight: 700;
  }
  img {
    cursor: pointer;
  }
`;
export const RegisterBox = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--text_b3);
  color: var(--Gray7_600, #757575);
  .codeContainer {
    width: 100%;
    background-color: var(--Gray2_100);
    margin-top: 20px;
    display: block;
    transition: 3s;
  }
  .none {
    display: none;
  }
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
    margin: 6px 0 4px;
  }
  margin-bottom: 8px;
`;

export const PasswordBox = styled.div`
  position: relative;
  .title {
    margin-bottom: 4px;
  }
  .inputPassword {
    margin: 7px 0 2px;
  }
  margin-bottom: 10px;
`;
export const PasswordCheckBox = styled.div`
  position: relative;
  .inputPassword {
    margin: 6px 0;
  }
  margin-bottom: 10px;
`;

export const NicknameBox = styled.div`
  .inputNickname {
    position: relative;
    margin: 6px 0;
  }
  margin-bottom: 12px;
`;

export const EmailBox = styled.div`
  position: relative;
  .inputEmail {
    margin: 6px 0 12px;
  }
`;

export const EmailCodeBox = styled.div`
  width: 338px;
  margin: 14px auto 15px;
  padding: 13px 0 16px;
  box-sizing: border-box;
  position: relative;
  .inputEmailCode {
    position: relative;
    margin: 8px 0;
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
    margin-top: 10px;
    .caption1,
    .caption2 {
      font-size: var(--text_cap1);
    }
    .caption2 {
      margin-left: 6px;
      text-decoration: underline;
      color: var(--Gray9_800, #424242);
      cursor: pointer;
    }
  }
`;

export const BirthBox = styled.div`
  margin-top: 15px;
  .title {
    margin-bottom: 8px;
  }
  .inputBirth {
    margin-top: 10px;
  }
  margin-bottom: 30px;
`;

export const GenderBox = styled.div`
  .title {
    margin-bottom: 6px;
  }
  .Btns {
    display: flex;
    gap: 6px;
    margin-bottom: 60px;
  }
`;

export const SpaceToLogin = styled.div`
  display: flex;
  justify-content: center;
  .caption2 {
    margin-left: 10px;
    text-decoration: underline;
    color: var(--Gray9_800, #424242);
    cursor: pointer;
  }
`;

export const DuplicateBtn = styled.button`
  border: 0;
  background-color: transparent;
  font-family: "Pretendard";
  font-size: var(--text_b2);
  padding: 0;
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

export const EmailCodeCheckBtn = styled.div<{ emailcodeCheck: boolean }>`
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${(props) =>
    props.emailcodeCheck ? "var(--Gray3_200, #eee)" : "   var(--Main_Blue, #0084ff)"};
  color: ${(props) =>
    props.emailcodeCheck ? "var(--Gray6_500, #959595)" : "   var(--White, #fff)"};
  width: 42px;
  height: 28px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 16px;
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
  color: ${(props) => (!props.disabled ? "var(--White, #fff)" : "var(--Gray6_500)")};
  background-color: ${(props) => (!props.disabled ? "var(--Main_Blue)" : "var(--Gray3_200)")};

  height: 56px;
  width: 100%;
  cursor: ${(props) => (!props.disabled ? "pointer" : "")};
  font-weight: 600;
  font-size: var(--text_b1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

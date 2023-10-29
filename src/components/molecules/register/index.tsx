import { FocusEvent, ChangeEvent, useState, useEffect } from "react";

import logo from "@/assets/LoginLogo.svg";
import Input from "@/components/atoms/input";

import {
  Container,
  RegisterTitle,
  IdBox,
  PasswordBox,
  PasswordCheckBox,
  NicknameBox,
  EmailBox,
  EmailCodeBox,
  BirthBox,
  GenderBox,
  RegisterBox,
  DuplicateBtn,
  RequestBtn,
  EmailCodeCheckBtn,
  GenderCheckBtn,
  RegisterBtn,
  SpaceToLogin,
} from "./style";
const Register = () => {
  const [userId, setUserId] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailCode, setEmailCode] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [emailCodeShow, setEmailCodeShow] = useState<boolean>(false);

  const MINUTES_IN_MS = 3 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, "0");
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  //error
  const [focus, setFocus] = useState<boolean>(false);
  const [password1Error, setPassword1Error] = useState<boolean>(false);
  const [password2Error, setPassword2Error] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  //유효성 검사 및 input 변경 함수

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e);
    setFocus(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e);
    // if (password1Error) {
    // }
    setFocus(false);
  };

  const handlePassword1Change = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    setPassword1(value);

    if (!regex.test(value)) {
      setPassword1Error(false);
    } else {
      setPassword1Error(true);
    }
  };

  const handlePassword2Change = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword2(value);
    if (password1 !== value) {
      setPassword2Error(false);
    } else {
      setPassword2Error(true);
    }
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    setEmail(value);

    if (!regex.test(value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const RequestEmail = () => {
    setEmailCodeShow(true);
    setEmailError(false);
  };

  useEffect(() => {
    if (emailCodeShow) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - INTERVAL);
      }, INTERVAL);

      if (timeLeft <= 0) {
        clearInterval(timer);
        console.log("타이머가 종료되었습니다.");
      }

      return () => {
        clearInterval(timer);
      };
    }
  }, [timeLeft, emailCodeShow]);

  return (
    <Container>
      <RegisterTitle>
        <img
          src={logo}
          alt="광장"
        />
        <p>회원가입</p>
      </RegisterTitle>
      <RegisterBox>
        {/* <form onSubmit={Register}> */}
        <div>
          <IdBox>
            <p className="title">아이디</p>
            <div className="inputId">
              <Input
                type="text"
                value={userId}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
                placeholder="아이디를 입력해주세요"
              />
              <DuplicateBtn /*onClick={DuplicateCheck}*/>중복확인</DuplicateBtn>
            </div>
            <div className="parityCheck">
              {userId ? <p>사용 가능한 아이디예요.</p> : <p>사용할 수 없는 아이디예요.</p>}
              <div>0/10</div>
            </div>
          </IdBox>

          <PasswordBox>
            <p className="title">비밀번호</p>
            <p
              className={!focus ? "caption" : password1Error ? "caption success" : "caption error"}
            >
              영문, 숫자, 특수문자를 포함한 8~30자 사이의 비밀번호를 입력해주세요.
            </p>
            <div className="inputPassword">
              <Input
                type="password"
                value={password1}
                onChange={handlePassword1Change}
                placeholder="비밀번호를 입력해주세요."
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </PasswordBox>

          <PasswordCheckBox>
            <p className="title">비밀번호 확인</p>
            <div className="inputPassword">
              <Input
                type="password"
                value={password2}
                onChange={handlePassword2Change}
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
            <div className="parityCheck">
              {password2Error ? <p>비밀번호가 일치해요.</p> : <p>비밀번호가 일치하지 않아요.</p>}
              <div>0/30</div>
            </div>
          </PasswordCheckBox>

          <NicknameBox>
            <p className="title">닉네임</p>
            <div className="inputNickname">
              <Input
                type="text"
                value={nickname}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
                placeholder="광장에서 사용할 닉네임을 입력해주세요."
              />
              <DuplicateBtn /*onClick={DuplicateCheck}*/>중복확인</DuplicateBtn>
            </div>
            <div className="parityCheck">
              {nickname ? <p>사용 가능한 닉네임이에요.</p> : <p>사용 불가능한 닉네임이에요.</p>}
              <div>0/10</div>
            </div>
          </NicknameBox>

          <EmailBox>
            <p className="title">이메일 인증</p>
            <div className="inputEmail">
              <Input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="유효한 이메일을 입력해주세요."
              />
            </div>
            <RequestBtn
              disabled={!emailError ? true : false}
              onClick={RequestEmail}
            >
              {emailCodeShow ? "이메일 인증을 요청했어요." : "이메일 인증 요청"}
            </RequestBtn>
          </EmailBox>

          {emailCodeShow && (
            <EmailCodeBox>
              <p className="caption">이메일로 전송된 인증코드를 입력해주세요.</p>
              <div className="inputEmailCode">
                <Input
                  type="text"
                  value={emailCode}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailCode(e.target.value)}
                  placeholder="인증코드 6자리 입력"
                />
                <div className="timer">
                  {minutes}:{second}
                </div>
                <EmailCodeCheckBtn /*onClick={DuplicateCheck}*/>확인</EmailCodeCheckBtn>
              </div>
              <div className="parityCheck">
                {emailCode ? <p>인증 완료 되었어요.</p> : <p>인증코드가 일치하지 않아요.</p>}
              </div>
              <div className="resend">
                <p className="caption1">이메일을 받지 못하셨나요?</p>
                <p className="caption2">요청 재전송하기</p>
              </div>
            </EmailCodeBox>
          )}

          <BirthBox>
            <p className="title">생년월일(선택)</p>
            <p className="caption">8자리의 생년월일을 띄어쓰기 없이 입력해주세요.</p>
            <div className="inputPassword">
              <Input
                type="text"
                value={birth}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBirth(e.target.value)}
                placeholder="ex) 20010412"
              />
            </div>
          </BirthBox>

          <GenderBox>
            <p className="title">성별(선택)</p>
            <div className="Btns">
              <GenderCheckBtn
                gender={gender}
                text="M"
                onClick={() => setGender("M")}
              >
                남성
              </GenderCheckBtn>
              <GenderCheckBtn
                gender={gender}
                text="W"
                onClick={() => setGender("W")}
              >
                여성
              </GenderCheckBtn>
            </div>
          </GenderBox>

          <RegisterBtn>회원가입 완료</RegisterBtn>

          <SpaceToLogin>
            <p className="caption1">이미 회원이신가요?</p>
            <p className="caption2">로그인</p>
          </SpaceToLogin>
          {/* </form> */}
        </div>
      </RegisterBox>
    </Container>
  );
};

export default Register;

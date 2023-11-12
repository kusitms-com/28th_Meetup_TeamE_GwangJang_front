import { FocusEvent, ChangeEvent, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { getDuplicateNickname, postEmail, postEmailCode, putLocalRegister } from "@/apis";
import logo from "@/assets/LoginLogo.svg";
import Loading from "@/components/atoms/Loading";
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
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [userIdNum, setUserIdNum] = useState<number>(0);
  const [password1Num, setPassword1Num] = useState<number>(0);
  const [password2Num, setPassword2Num] = useState<number>(0);
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailCode, setEmailCode] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [emailCodeShow, setEmailCodeShow] = useState<boolean>(false);
  const [registerFlag, setRegisterFlag] = useState<boolean>(true);

  const MINUTES_IN_MS = 3 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, "0");
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  const [focus, setFocus] = useState<boolean>(false);
  //const [password1Error, setPassword1Error] = useState<boolean>(false);
  const [password1Error, setPassword1Error] = useState<boolean>(false);
  const [password2Error, setPassword2Error] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  //기타
  //아이디 중복체크
  const [duplicateShow, setDuplicateShow] = useState<boolean>(false);
  const [duplicate, setDuplicate] = useState<boolean>(false);
  const [errorIdLine, setErrorIdLine] = useState<boolean>(false);

  const [password2Show, setPassword2Show] = useState<boolean>(false);

  //닉네임 중복체크
  const [duplicateShowNickname, setDuplicateShowNickname] = useState<boolean>(false);
  const [duplicateNickname, setDuplicateNickname] = useState<boolean>(false);
  const [errorNicknameLine, setErrorNicknameLine] = useState<boolean>(false);

  const [emailcodeCheck, setEmailcodeCheck] = useState<boolean>(false);
  const [emailcodeCheckShow, setEmailcodeCheckShow] = useState<boolean>(false);
  const [emailcodeError, setEmailcodeError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  //유효성 검사 및 input 변경 함수

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e);
    setFocus(true);
  };

  // const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   // if (password1Error) {
  //   // }
  //   setFocus(false);
  // };

  //id 입력
  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDuplicateShow(false);
    setErrorIdLine(false);
    if (value.length < 11) {
      setUserIdNum(value.length);
      setUserId(value);
    }
  };
  const DuplicateCheck = () => {
    // 로딩 후.
    // api 요청해야함. 요청이 오면
    // if 성공이 오면 듀플리케이트 값 true로 하고 show true

    if (!duplicate) {
      setDuplicate(true);
      setDuplicateShow(true); // 일단 버튼을 누르면 hide 클래스 제거
    } else {
      setDuplicate(false);
      setDuplicateShow(true); // 일단 버튼을 누르면 hide 클래스 제거
      setErrorIdLine(true); //에러 라인 전달
    }
  };

  //비밀번호 1번째 입력
  const handlePassword1Change = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (value.length < 31) {
      setPassword1Num(value.length);
    }

    setPassword1(value);

    if (!regex.test(value)) {
      setPassword1Error(false);
    } else {
      setPassword1Error(true);
    }
  };

  // 비밀번호 2차 입력
  const handlePassword2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword2Show(true);
    const value = e.target.value;
    if (value.length < 31) {
      setPassword2Num(value.length);
    }
    setPassword2(value);
    if (password1 !== value) {
      setPassword2Error(false);
    } else {
      setPassword2Error(true);
    }
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDuplicateShowNickname(false);
    setErrorNicknameLine(false);
    if (value.length < 11) {
      setNickname(value);
    }
  };
  //닉네임 중복 체크
  const DuplicateCheckNickname = () => {
    getDuplicateNickname(nickname)
      .then((res) => {
        console.log(res);
        if (!res.data.data.isDuplicated) {
          setDuplicateNickname(true);
          setDuplicateShowNickname(true); // 일단 버튼을 누르면 hide 클래스 제거
        } else {
          setDuplicateNickname(false);
          setDuplicateShowNickname(true); // 일단 버튼을 누르면 hide 클래스 제거
          setErrorNicknameLine(true); //에러 라인 전달
        }
      })
      .catch((err) => console.log(err));

    // 로딩 후.
    // api 요청해야함. 요청이 오면
    // if 성공이 오면 듀플리케이트 값 true로 하고 show true
  };

  // 이메일 유효성 검사
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

  // 이메일 요청 버튼 누를시,
  const RequestEmail = () => {
    setLoading(true);
    postEmail(email)
      .then((res) => {
        setEmailCodeShow(true);
        setEmailError(false);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleEmailCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailcodeError(true);
    setEmailcodeCheckShow(false);
    const regex = /^[0-9]*$/;
    if (value.length < 7) {
      if (regex.test(value)) {
        setEmailCode(e.target.value);
      }
    }
  };

  const EmailCodeCheck = () => {
    postEmailCode({ email, emailCode })
      .then((res) => {
        console.log(res);
        if (res.data.data.isChecked) {
          setEmailcodeCheck(true);
          setEmailcodeCheckShow(true); // 일단 버튼을 누르면 hide 클래스 제거 -> 시간 멈추기 기능넣어여함.
          setEmailcodeError(false);
        } else {
          setEmailcodeCheck(false);
          setEmailcodeCheckShow(true); // 일단 버튼을 누르면 hide 클래스 제거
          setEmailcodeError(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const ResendEmailCode = () => {
    setLoading(true);
    postEmail(email)
      .then((res) => {
        setEmailCode(""); //재전송 api
        setEmailError(false);
        setTimeLeft(MINUTES_IN_MS); // 시간 초기화
        setLoading(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const BirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 9) {
      setBirthDate(e.target.value);
    }
  };

  const RegisterOk = () => {
    putLocalRegister({ userId, password2, nickname, gender, email, birthDate })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    //회원가입 api 발동과 동시에 회원가입 완료 되었다는 모달창 띄우기
  };

  //이메일 타이머 작동
  useEffect(() => {
    //error
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

  useEffect(() => {
    if (
      duplicate &&
      userId &&
      password1Error &&
      password1 &&
      password2Error &&
      password2 &&
      nickname && //닉네임 중복체크 넣으면 된다.
      duplicateNickname &&
      !emailError &&
      emailcodeCheck &&
      birthDate &&
      gender
    ) {
      setRegisterFlag(false);
    } else {
      setRegisterFlag(true);
    }
    // console.log(
    //   duplicate,
    //   userId,
    //   password1Error,
    //   password1,
    //   password2Error,
    //   password2,
    //   nickname,
    //   emailError,
    //   emailcodeCheck
    // );
  }, [
    duplicate,
    userId,
    password1Error,
    password1,
    password2Error,
    password2,
    nickname, //닉네임 중복체크 넣으면 된다.
    duplicateNickname,
    emailError,
    emailcodeCheck,
    birthDate,
    gender,
  ]);

  return (
    <Container>
      {loading ? <Loading /> : ""}
      <RegisterTitle>
        <img
          src={logo}
          alt="광장"
          onClick={() => navigate("/")}
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
                onChange={handleIdChange}
                placeholder="아이디를 입력해주세요."
                errorLine={errorIdLine}
              />
              <DuplicateBtn
                disabled={duplicate}
                className={duplicateShow ? "title" : ""}
                onClick={DuplicateCheck}
              >
                중복확인
              </DuplicateBtn>
            </div>
            <div className="parityCheck">
              <div>
                {duplicateShow ? (
                  duplicate ? (
                    <p className="success">사용 가능한 아이디예요.</p>
                  ) : (
                    <p className="error">사용할 수 없는 아이디예요.</p>
                  )
                ) : (
                  ""
                )}
              </div>
              <div>({userIdNum}/10)</div>
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
                errorLine={password1Error}
              />
            </div>
            <div className="parityCheck">
              <div></div>
              <div>({password1Num}/30)</div>
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
                errorLine={password2Error}
              />
            </div>
            <div className="parityCheck">
              <div>
                {password2Show ? (
                  password2Error ? (
                    <p className="success">비밀번호가 일치해요.</p>
                  ) : (
                    <p className="error">비밀번호가 일치하지 않아요.</p>
                  )
                ) : (
                  ""
                )}
              </div>
              <div>({password2Num}/30)</div>
            </div>
          </PasswordCheckBox>

          <NicknameBox>
            <p className="title">닉네임</p>
            <div className="inputNickname">
              <Input
                type="text"
                value={nickname}
                onChange={handleNicknameChange}
                placeholder="광장에서 사용할 닉네임을 입력해주세요."
                errorLine={errorNicknameLine}
              />
              <DuplicateBtn
                //disabled={duplicateNickname} // 성공하면 바꿀 수 없게
                className={duplicateShowNickname ? "title" : ""}
                onClick={DuplicateCheckNickname}
              >
                중복확인
              </DuplicateBtn>
            </div>
            <div className="parityCheck">
              <div>
                {duplicateShowNickname ? (
                  duplicateNickname ? (
                    <p className="success">사용 가능한 닉네임이에요.</p>
                  ) : (
                    <p className="error">사용할 수 없는 닉네임이에요.</p>
                  )
                ) : (
                  ""
                )}
              </div>
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

          <div className={emailCodeShow ? "codeContainer " : "none"}>
            <EmailCodeBox>
              <p className="caption">이메일로 전송된 인증코드를 입력해주세요.</p>
              <div className="inputEmailCode">
                <Input
                  type="text"
                  value={emailCode}
                  onChange={handleEmailCodeChange}
                  placeholder="인증코드 6자리 입력"
                  errorLine={emailcodeError}
                />
                <div className={emailcodeCheck ? "none" : "timer"}>
                  {minutes}:{second}
                </div>
                <EmailCodeCheckBtn
                  //disabled={} 나중에 코드 체크 했을 때, 오는 서버의 Data 값으로 disabled 처리 하거나 다시 요소 올리기
                  emailcodeCheck={emailcodeCheck}
                  onClick={EmailCodeCheck}
                >
                  확인
                </EmailCodeCheckBtn>
              </div>
              <div className="parityCheck">
                <div>
                  {emailcodeCheckShow ? (
                    emailcodeCheck ? (
                      <p className="success">인증 완료 되었어요.</p>
                    ) : (
                      <p className="error">인증코드가 일치하지 않아요.</p>
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="resend">
                <p className="caption1">이메일을 받지 못하셨나요? </p>
                <p
                  className="caption2"
                  onClick={ResendEmailCode}
                >
                  요청 재전송하기
                </p>
              </div>
            </EmailCodeBox>
          </div>

          <BirthBox>
            <p className="title">생년월일</p>
            <p className="caption">8자리의 생년월일을 띄어쓰기 없이 입력해주세요.</p>
            <div className="inputBirth">
              <Input
                type="text"
                value={birthDate}
                onChange={BirthChange}
                placeholder="ex) 20010412"
              />
            </div>
          </BirthBox>

          <GenderBox>
            <p className="title">성별</p>
            <div className="Btns">
              <GenderCheckBtn
                gender={gender}
                text="MALE"
                onClick={() => setGender("MALE")}
              >
                남성
              </GenderCheckBtn>
              <GenderCheckBtn
                gender={gender}
                text="FEMALE"
                onClick={() => setGender("FEMALE")}
              >
                여성
              </GenderCheckBtn>
            </div>
          </GenderBox>

          <RegisterBtn
            disabled={registerFlag}
            onClick={RegisterOk}
          >
            회원가입 완료
          </RegisterBtn>

          <SpaceToLogin>
            <p className="caption1">이미 회원이신가요?</p>
            <p
              className="caption2"
              onClick={() => navigate("/login")}
            >
              로그인
            </p>
          </SpaceToLogin>
          {/* </form> */}
        </div>
      </RegisterBox>
    </Container>
  );
};

export default Register;

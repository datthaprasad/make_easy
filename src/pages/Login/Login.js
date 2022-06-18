import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import UserContext from "../../context/UserContext";
import fetchApi from "../../utility/fetch";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  HorizontalRule,
  ForgotPassword,
  BgImgContainer,
  IconsContainer,
} from "./Login.styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setuserType] = useState(1); //1 for user, 2 for service provide, 3 for admin
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const LoginHandler = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please enter all the fields");
    } else {
      const loginResponse = await fetchApi("/login", { email, password });
      if (loginResponse.status === "ok") {
        userContext.setIsLoggedIn(true, userType,loginResponse.user);
        alert("Login Successful");
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <BgImgContainer>
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputContainer>
        <IconsContainer>
          <Input
            type="radio"
            name="userType"
            value={3}
            onChange={(e) => setuserType(Number(e.target.value))}
          />
          <label>Admin</label>
          <Input
            type="radio"
            name="userType"
            value={2}
            onChange={(e) => setuserType(Number(e.target.value))}
          />
          <label>Service Provider</label>
        </IconsContainer>
        <ButtonContainer>
          <Button content="Login" onClick={LoginHandler} />
        </ButtonContainer>
        <HorizontalRule />

        <ForgotPassword>Forgot Password ?</ForgotPassword>
      </MainContainer>
    </BgImgContainer>
  );
};

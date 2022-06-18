import { useContext } from "react";
import { useState } from "react";
import { Loading } from "react-fullscreen-loading";
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
} from "./Register.styles";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const [userType, setuserType] = useState(1); //1 for user, 2 for service provide, 3 for admin

  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const SignupHandler = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please enter all the fields");
    } else {
      setIsLoading(true);
      const loginResponse = await fetchApi(
        "/register",
        {
          email,
          password,
          name,
        }
      );
      setIsLoading(false);
      if (loginResponse.status === "ok") {
        alert("Verification email sent, please verify your email");
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    }
  };

  return (
    <>
      {!isLoading ? (
        <h1>Loading</h1>
      ) : (
        <BgImgContainer>
          <MainContainer>
            <WelcomeText>Welcome</WelcomeText>
            <InputContainer>
              <Input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
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
              {/* <Input
            type="radio"
            name="userType"
            value={2}
            onChange={(e) => setuserType(e.target.value)}
          />
          <label>Admin</label> */}
              <Input
                type="radio"
                name="userType"
                value={3}
                onChange={(e) => setuserType(e.target.value)}
              />
              <label>Service Provider</label>
            </IconsContainer>
            <ButtonContainer>
              <Button content="Signup" onClick={SignupHandler} />
            </ButtonContainer>
            <HorizontalRule />

            <ForgotPassword>
              Verification mail will be sent to given mail id.
            </ForgotPassword>
          </MainContainer>
        </BgImgContainer>
      )}
    </>
  );
};

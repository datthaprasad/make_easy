import {
  ProfileButtonContainer,
  ProfileCard,
  ProfileEmail,
  ProfileName,
  ProfileService,
  StyledLabel,
} from "./Profile.styles";
import { Container } from "../../GlobalStyles";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { useContext } from "react";
import userContext from "../../context/UserContext";
import { useEffect } from "react";
import { useState } from "react";
import fetchApi from "../../utility/fetch";

const Profile = () => {
  const UserContext = useContext(userContext);
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState();

  useEffect(() => {
    async function fetchProfile(id) {
      setIsLoading(true);
      //TODO API call
      const response = await fetchApi(
        "/service_provider/getUser",
        { id },
        "post"
      );
      setApiData(response)
      setIsLoading(false);
    }
    if (UserContext.isLoggedIn && UserContext.userType === 2) fetchProfile();
    else {
      alert("Invalid service provider");
      window.location.replace("/");
    }
  });

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && apiData && (
        <Container>
          <ProfileCard>
            <ProfileName>{apiData.name}</ProfileName>
            <ProfileEmail>
              <StyledLabel>EMAIL</StyledLabel> : {apiData.email}
            </ProfileEmail>
            <ProfileService>
              <StyledLabel>PHONE</StyledLabel> : {apiData.phone}
            </ProfileService>
            <ProfileService>
              <StyledLabel>ADDRESS</StyledLabel> : {apiData.address}
            </ProfileService>
            <ProfileButtonContainer>
              <Button content="Edit Profile" />
            </ProfileButtonContainer>
          </ProfileCard>
        </Container>
      )}
    </>
  );
};
export default Profile;

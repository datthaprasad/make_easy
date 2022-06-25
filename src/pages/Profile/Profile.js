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
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const UserContext = useContext(userContext);
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile(id) {
      setIsLoading(true);
      const response = await fetchApi(
        "/service_provider/getUser",
        { user_id: id },
        "post"
      );
      if (response.phone) {
        const service = await fetchApi(
          "/service/oneservice/" + response.service_id,
          {},
          "get"
        );
        if (service.service)
          setApiData({
            ...response,
            service_name: service.service.name,
            service_description: service.service.description,
            service_price: service.service.price,
          });
        else setApiData({name:response.name});
      }
      setIsLoading(false);
    }
    if (UserContext.isLoggedIn && UserContext.userType === 2)
      fetchProfile(UserContext.userId);
    else {
      alert("Invalid service provider");
      window.location.replace("/");
    }
  }, [UserContext.isLoggedIn, UserContext.userType, UserContext.userId]);

  const editHandler = async (e) => {
    e.preventDefault();
    navigate("/editprofile");
  };

  return (
    <>
      {isLoading && <Loader />}
      {apiData && (
        <Container>
          <ProfileCard>
            {apiData.phone && (
              <>
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
                <ProfileService>
                  <StyledLabel>SERVICE</StyledLabel> : {apiData.service_name}
                </ProfileService>
                <ProfileService>
                  <StyledLabel>SERVICE DESCRIPTION</StyledLabel> :{" "}
                  {apiData.service_description}
                </ProfileService>
                <ProfileService>
                  <StyledLabel>SERVICE DESCRIPTION</StyledLabel> :{" "}
                  {apiData.service_price}
                </ProfileService>
              </>
            )}
            {!apiData.phone && (
              <ProfileService>Please Update Your Details.</ProfileService>
            )}
            <ProfileButtonContainer>
              <Button content="Edit Profile" onClick={editHandler} />
            </ProfileButtonContainer>
          </ProfileCard>
        </Container>
      )}
    </>
  );
};
export default Profile;

import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import UserContext from "../../context/UserContext";
import constants from "../../GlobalConstants";
import { GridContainer } from "../../GlobalStyles";
import useFetch from "../../hooks/useFetch";

const ListService = () => {
  const navigation = useNavigate();
  const userContext = useContext(UserContext);
  const { isLoading, apiData, serverError } = useFetch(
    "get",
    "/service/listservice"
  );

  useEffect(() => {
    if (
      !userContext.isLoggedIn ||
      (userContext.userType !== 1 && userContext.userType !== 2)
    ) {
      window.location.href = "/login";
    }
  }, [userContext.isLoggedIn, userContext.userType]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && serverError && <div>{serverError}</div>}
      {apiData && apiData.services.length === 0 && <h1>No services</h1>}
      {apiData && apiData.services && (
        <GridContainer>
          {apiData.services.map((service, index) => {
            return (
              <Card
                onClick={(e) => {
                  e.preventDefault();
                  if (userContext.userType === constants.USER_TYPE.NORMAL_USER)
                    navigation(`/serviceproviderlist/${service.id}`);
                }}
                key={service.id}
                name={service.name}
                description={service.description}
                price={service.price}
              />
            );
          })}
        </GridContainer>
      )}
    </>
  );
};
export default ListService;

import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import UserContext from "../../context/UserContext";
import fetchApi from "../../utility/fetch";
import { Data, Header, Row, Table } from "../../components/Table/Table";
import { Container } from "../../GlobalStyles";
import Button from "../../components/Button/Button";

const ListServiceProviders = () => {
  const userContext = useContext(UserContext);
  const { serviceId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);

  const bookHandler = async (e) => {
    e.preventDefault();

    if (userContext.isLoggedIn) {
      setIsLoading(true);
      const service = await fetchApi(
        "/service/oneservice/" + serviceId,
        {},
        "get"
      );
      if (!service.service) return alert("Service not found");

      const response = await fetchApi(
        "/booking",
        {
          service_id: serviceId,
          user_id: userContext.userId,
          service_provider_id: e.target.id,
          price: service.service.price,
          name: document.getElementById(e.target.id).parentElement.parentNode
            .childNodes[0].innerHTML,
          phone: document.getElementById(e.target.id).parentElement.parentNode
            .childNodes[1].innerHTML,
          email: document.getElementById(e.target.id).parentElement.parentNode
            .childNodes[2].innerHTML,
        },
        "post"
      );
      setIsLoading(false);
      if (response.status === "ok") {
        //open in new tab
        window.open(response.response.short_url);
      } else {
        alert("Booking failed...!");
      }
    } else {
      alert("Please login to book");
    }
  };

  useEffect(() => {
    if (
      !userContext.isLoggedIn ||
      (userContext.userType !== 1 && userContext.userType !== 2)
    ) {
      window.location.href = "/login";
      return;
    }
    async function fetchData(serviceId) {
      setIsLoading(true);
      const response = await fetchApi(
        "/service_provider/getUsersList",
        { service_id: serviceId },
        "post"
      );
      setIsLoading(false);
      setApiData(response);
    }
    fetchData(serviceId);
  }, [userContext.isLoggedIn, userContext.userType, serviceId]);

  return (
    <>
      {isLoading && <Loader />}
      {apiData && apiData.user && (
        <Container>
          <Table>
            <Row>
              <Header>Name</Header>
              <Header>Phone</Header>
              <Header>Email</Header>
              <Header>Address</Header>
              <Header></Header>
            </Row>

            {apiData.user.map((user, index) => {
              return (
                <Row index={user.id}>
                  <Data>{user.name}</Data>
                  <Data>{user.phone}</Data>
                  <Data>{user.email}</Data>
                  <Data>{user.address}</Data>
                  <Data>
                    <Button
                      content="Book Him"
                      id={user.id}
                      onClick={bookHandler}
                    />
                  </Data>
                </Row>
              );
            })}
          </Table>

          {apiData && apiData.user.length === 0 && (
            <h1 style={{ color: "red", textAlign: "center" }}>No users</h1>
          )}
        </Container>
      )}
    </>
  );
};
export default ListServiceProviders;

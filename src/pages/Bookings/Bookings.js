import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { Data, Header, Row, Table } from "../../components/Table/Table";
import userContext from "../../context/UserContext";
import { Container } from "../../GlobalStyles";
import fetchApi from "../../utility/fetch";

const Bookings = () => {
  const [apiData, setBookingsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const UserContext = useContext(userContext);

  useEffect(() => {
    async function fetchBookingHistory() {
      setIsLoading(true);
      const response = await fetchApi(
        "/bookingHistory",
        { user_id: UserContext.userId },
        "post"
      );
      setIsLoading(false);
      if (response.status === "ok") {
        setBookingsData(response.response);
      } else {
        alert("something went wrong...!");
        navigate("/");
      }
    }
    fetchBookingHistory();
  }, [navigate, UserContext.userId]);

  return (
    <>
      {isLoading && <Loader />}
      {apiData && apiData.length === 0 && <h1>No Bookings</h1>}
      {apiData && apiData && (
        <Container>
          <Table>
            <Row>
              <Header>No.</Header>
              <Header>Service</Header>
              <Header>Service Provider</Header>
              <Header>Price</Header>
              <Header>Date</Header>
            </Row>
            {apiData.map((service, index) => {
              return (
                <Row key={index}>
                  <Data>{index + 1}</Data>
                  <Data>{service.service_name}</Data>
                  <Data>{service.service_provider_name}</Data>
                  <Data>{service.price}</Data>
                  <Data>{service.date}</Data>
                  {/* <Data>
                    <Button
                      content="Edit"
                      id={service.id}
                      onClick={editHandler}
                    />
                  </Data>
                  <Data>
                    <Button
                      content="Delete"
                      onClick={deleteHandler}
                      id={service.id}
                    />
                  </Data> */}
                </Row>
              );
            })}
          </Table>
        </Container>
      )}
    </>
  );
};
export default Bookings;

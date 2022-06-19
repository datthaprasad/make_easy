import { useEffect } from "react";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { Data, Header, Row, Table } from "../../components/Table/Table";
import UserContext from "../../context/UserContext";
import { Container } from "../../GlobalStyles";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import fetchApi from "../../utility/fetch";

const AdminListService = () => {
  const userContext = useContext(UserContext);
  const { isLoading, apiData, serverError } = useFetch(
    "get",
    "/service/listservice"
  );
  const navigate = useNavigate();

  const editHandler = (e) => {
    e.preventDefault();
    navigate("/adminupdateservice/" + e.target.id);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    const response = await fetchApi(
      "/service/deleteservice",
      { service_id: Number(e.target.id) },
      "delete"
    );
    if (response.status === "success") window.location.reload();
    else alert("Something went wrong!...");
  };

  useEffect(() => {
    if (!userContext.isLoggedIn || useContext.userType !== 3) {
      window.location.href = "/login";
    }
  }, [userContext.isLoggedIn, userContext.userType]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && serverError && <div>{serverError}</div>}
      {apiData && apiData.services.length === 0 && <h1>No services</h1>}
      {apiData && apiData.services && (
        <Container>
          <Table>
            <Row>
              <Header>Service Id</Header>
              <Header>Name</Header>
              <Header>Description</Header>
              <Header>Price</Header>
              <Header></Header>
              <Header></Header>
            </Row>
            {apiData.services.map((service, index) => {
              return (
                <Row index={service.id}>
                  <Data>{service.id}</Data>
                  <Data>{service.name}</Data>
                  <Data>{service.description}</Data>
                  <Data>{service.price}</Data>
                  <Data>
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
                  </Data>
                </Row>
              );
            })}
          </Table>
        </Container>
      )}
    </>
  );
};
export default AdminListService;

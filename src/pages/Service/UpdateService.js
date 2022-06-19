import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import UserContext from "../../context/UserContext";
import fetchApi from "../../utility/fetch";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

const UpdateService = () => {
  const { id } = useParams();
  const userContext = useContext(UserContext);
  const [service, setService] = useState({
    name: "",
    description: "",
    id: 0,
    price: 0,
  });
  const [submitLoading, setIsLoading] = useState(false);
  const { isLoading, apiData, serverError } = useFetch(
    "get",
    "/service/oneservice/" + Number(id)
  );
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!service.name || !service.description || !service.price) {
      alert("Please fill all the fields");
      return;
    }
    setIsLoading(true);
    const response = await fetchApi(
      "/service/editservice",
      {
        servicename: service.name,
        desc: service.description,
        price: service.price,
        service_id: id,
      },
      "post"
    );
    setIsLoading(false);
    if (response.status === "success") alert("Service updated successfully");
    else alert("Something went wrong");
  };

  useEffect(() => {
    if (apiData)
      setService({
        name: apiData.service.name,
        description: apiData.service.description,
        id: apiData.service.id,
        price: apiData.service.price,
      });
  }, [apiData]);

  return (
    <>
      {serverError && <h1>{serverError}</h1>}
      {isLoading || submitLoading ? (
        <Loader />
      ) : (
        <>
          {userContext.isLoggedIn && userContext.userType === 3 && (
            <Form submitHandler={submitHandler}>
              <h1>Form</h1>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={service.name}
                onChange={(e) =>
                  setService((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <br />
              <Input
                type="text"
                name="description"
                placeholder="Description"
                value={service.description}
                onChange={(e) =>
                  setService((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
              <br />
              <Input
                type="number"
                name="price"
                placeholder="Price"
                value={service.price}
                onChange={(e) =>
                  setService((prev) => ({ ...prev, price: e.target.value }))
                }
              />
              <br />
              <Button name="submit" content="Update Service" />
            </Form>
          )}
          {userContext.userType !== 3 && (
            <h1>You are not authorized to view this page</h1>
          )}
        </>
      )}
    </>
  );
};
export default UpdateService;

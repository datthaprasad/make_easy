import { useState } from "react";
import Button from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Dropdown from "react-dropdown";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useContext } from "react";
import userContext from "../../context/UserContext";
import fetchApi from "../../utility/fetch";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: null,
    phone: null,
    address: null,
    serviceId: 0,
  });
  //to get services from api
  const { apiData } = useFetch("get", "/service/listservice");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log({ userDetails });
    if (
      !userDetails.name ||
      !userDetails.address ||
      !userDetails.phone ||
      !userDetails.serviceId
    ) {
      alert("Please enter all the field");
    } else {
      const response = await fetchApi(
        "/service_provider/profilesp",
        {
          user_id: UserContext.userId,
          name: userDetails.name,
          service_id: userDetails.serviceId,
          phone: userDetails.phone,
          address: userDetails.address,
        },
        "post"
      );
      if (response.status === "ok") {
        alert("Profile updated successfully");
        navigate("/profile");
      } else {
        alert("Error updating profile");
      }
    }
  };
  const UserContext = useContext(userContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApi(
        "/service_provider/getUser",
        { user_id: UserContext.userId },
        "post"
      );
      console.log("dps", { response });
      setUserDetails({
        name: response.name,
        phone: response.phone,
        address: response.address,
        serviceId: response.id,
      });
    };
    fetchData();
  }, [UserContext.userId]);

  return (
    <>
      {UserContext.userId && (
        <Form submitHandler={submitHandler}>
          <h1>Profile Form</h1>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <br />
          <Input
            type="number"
            name="phone"
            placeholder="Phone"
            value={userDetails.phone}
            onChange={(e) =>
              setUserDetails((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
          />
          <br />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={userDetails.address}
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, address: e.target.value }))
            }
          />
          <br />
          <span style={{ color: "Black", borderBottom: "1px solid blue" }}>
            Service :{" "}
          </span>
          <Dropdown
            options={
              apiData
                ? apiData.services.map((service) => {
                    return { value: service.id, label: service.name };
                  })
                : []
            }
            onChange={(e) => {
              setUserDetails((prev) => ({ ...prev, serviceId: e.value }));
            }}
            placeholder="Click here to select an service"
          />

          <br />
          <Button onClick={submitHandler} content="Update Profile" />
        </Form>
      )}
      {!UserContext.userId && (
        <h1>You are not authorized to this page without login</h1>
      )}
    </>
  );
};
export default EditProfile;

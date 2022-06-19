import { useState } from "react";
import Button from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Dropdown from "react-dropdown";
import useFetch from "../../hooks/useFetch";

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: null,
    phone: null,
    address: null,
    serviceId: 0,
  });
  //to get services from api
  const { apiData } = useFetch("get", "/service/listservice");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !userDetails.name ||
      !userDetails.address ||
      !userDetails.phone ||
      !userDetails.serviceId
    ) {
      alert("Please enter all the field");
    }
    //TODO API CALL for update profile service provider
  };

  return (
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
      <Button
        type="submit"
        name="submit"
        placeholder="Submit"
        label="Submit"
        content="Update Profile"
      />
    </Form>
  );
};
export default EditProfile;

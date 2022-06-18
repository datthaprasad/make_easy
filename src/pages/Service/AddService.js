import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import UserContext from "../../context/UserContext";

const AddService = () => {
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      alert("Please fill all the fields");
      return;
    }
    //TODO api call
    alert("Service added successfully");
    window.location.reload();
  };
  const userContext = useContext(UserContext);

  return (
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
              setService((prev) => ({ ...prev, description: e.target.value }))
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
          <Button
            type="submit"
            name="submit"
            placeholder="Submit"
            label="Submit"
            content="Add Service"
          />
        </Form>
      )}
      {userContext.userType !=3 && (
        <h1>You are not authorized to view this page</h1>
      )}
    </>
  );
};
export default AddService;

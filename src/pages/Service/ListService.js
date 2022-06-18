import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Card } from "../../components/Card/Card";
import UserContext from "../../context/UserContext";
import { GridContainer } from "../../GlobalStyles";
import useFetch from "../../hooks/useFetch";

const ListService = () => {
  const userContext = useContext(UserContext);
  const [services, setServices] = useState([
    {
      name: "dattha prasad",
      description: "descr jdfhdjfdfksdf kfjkff kjkfjg fgkjkfg dhgh dkjkfgf gk",
      price: "100 $",
      image: "1",
    },
    {
        name: "dattha prasad",
        description: "descr jdfhdjfdfksdf kfjkff kjkfjg fgkjkfg dhgh dkjkfgf gk",
        price: "100 $",
        image: "1",
      },
      {
        name: "dattha prasad",
        description: "descr jdfhdjfdfksdf kfjkff kjkfjg fgkjkfg dhgh dkjkfgf gk",
        price: "100 $",
        image: "1",
      },
      {
        name: "dattha prasad",
        description: "descr jdfhdjfdfksdf kfjkff kjkfjg fgkjkfg dhgh dkjkfgf gk",
        price: "100 $",
        image: "1",
      },
  ]);
  //   const { isLoading, apiData, serverError } = useFetch(
  //     "http://localhost:5000/api/services"
  //   );
  //   useEffect(() => {
  //     if (!userContext.isLoggedIn) {
  //       window.location.href = "/login";
  //     }
  //   }, [userContext.isLoggedIn]);

  return (
    <GridContainer>
      {/* {isLoading && <div>Loading...</div>}
      {serverError && <div>{serverError}</div>} */}
      {services.map((service, index) => {
        return (
          <Card
            key={index}
            name={service.name}
            description={service.description}
            price={service.price}
          />
        );
      })}
    </GridContainer>
  );
};
export default ListService;

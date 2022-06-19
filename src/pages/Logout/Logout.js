import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";

const Logout = () => {
  const UserContext = useContext(userContext);
  useEffect(() => {
    //logout user
    UserContext.setIsLoggedIn(false, 0, {});
    //navigate to /home path
    window.location.href = "/";
  }, [UserContext]);
  return <></>;
};
export default Logout;

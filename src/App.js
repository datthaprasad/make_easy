import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import UserContext from "./context/UserContext";
import ListService from "./pages/Service/ListService";
import AddService from "./pages/Service/AddService";
import constants from "./GlobalConstants";
import Logout from "./pages/Logout/Logout";
import AdminListService from "./pages/Service/AdminServiceList";
import UpdateService from "./pages/Service/UpdateService";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import ListServiceProviders from "./pages/Service/ListServiceProviders";

function App() {
  const [menuItems, setMenuItems] = useState(constants.DEFAULT_MENU);

  const [globalState, setGlobalState] = useState({
    isLoggedIn: false,
    userType: 0,
    userName: "",
    userId: "",
    userEmail: "",
  });
  const contextValues = {
    isLoggedIn: globalState.isLoggedIn,
    userType: globalState.userType,
    userName: globalState.userName,
    userId: globalState.userId,
    userEmail: globalState.userEmail,
    setIsLoggedIn: (value, userType, userData) => {
      //set menu items based on user type
      if (userType === constants.USER_TYPE.ADMIN)
        setMenuItems(constants.ADMIN_MENU);
      else if (userType === constants.USER_TYPE.SERVICE_PROVIDER)
        setMenuItems(constants.SERVICE_PROVISER_MENU);
      else setMenuItems(constants.USER_MENU);

      //set global state values
      setGlobalState({
        isLoggedIn: value,
        userType: userType,
        userName: userData.name,
        userId: userData.id,
        userEmail: userData.email,
      });
    },
  };

  return (
    <UserContext.Provider value={contextValues}>
      <Router>
        <GlobalStyles />
        <Navbar menuItems={menuItems} />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Logout />}></Route>

          <Route path="/listservice" element={<ListService />}></Route>
          <Route path="/addservice" element={<AddService />}></Route>
          <Route
            path="/adminlistservice"
            element={<AdminListService />}
          ></Route>
          <Route
            path="/adminupdateservice/:id"
            element={<UpdateService />}
          ></Route>

          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>

          <Route path="/serviceproviderlist/:serviceId" element={<ListServiceProviders />}></Route>

          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

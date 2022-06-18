import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { Button } from "../../GlobalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuItem,
  MenuIcon,
  MenuLink,
  Menu,
  MenuLinkBtn,
} from "./Navbar.styles";
const Navbar = ({ menuItems }) => {
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  return (
    <div>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">Make Easy</NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              {menuItems.map((menu,index) => {
                if (menu.type === "button") {
                  return (
                    <MenuLinkBtn to={menu.navigate} key={index}>
                      <Button primary>{menu.name}</Button>
                    </MenuLinkBtn>
                  );
                } else
                  return (
                    <MenuItem key={index}>
                      <MenuLink onClick={menu.handler} to={menu.navigate}>
                        {menu.name}
                      </MenuLink>
                    </MenuItem>
                  );
              })}
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;

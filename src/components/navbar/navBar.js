import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './navBar.scss'


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navBar" color="light" light expand="md">
      <NavbarBrand href="/">לב אחד</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/volunteerRegister/">הרשמה להתנדבות</NavLink>
            <NavLink href="/volunteerRegister/">הרשמה גדככדג</NavLink>
            <NavLink href="/volunteerRegister/">הרשמה כדגכדג</NavLink>
            <NavLink href="/volunteerRegister/">וןםוןכדגכדג</NavLink>
            <NavLink href="/volunteerRegister/">הרשמה םוןםןו</NavLink>
            <NavLink href="/volunteerRegister/">הרשמה עגכעגכ</NavLink>
            <NavLink href="/volunteerRegister/">הרשמה עכגעכג</NavLink>
            <NavLink href="/volunteerRegister/">הרשמה נבהנ</NavLink>
            <NavLink href="/volunteerRegister/">הרשמה נבה</NavLink>


          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};
export default NavBar;
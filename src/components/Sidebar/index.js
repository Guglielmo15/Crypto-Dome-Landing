import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  // SidebarRoute,
  // SideBtnWrap
} from './SidebarElements';
import {
  NavBtnLink,
  CloudCircle
} from '../Navbar/NavbarElements';
import { FaCrown } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='discover'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Team
          </SidebarLink>
          <SidebarLink
            to='services'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Services
          </SidebarLink>
        </SidebarMenu>
        <NavBtnLink to="/#">
          Hub <CloudCircle />
        </NavBtnLink>
        <NavBtnLink to="/#">
          Premium <FaCrown />
        </NavBtnLink>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

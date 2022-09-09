import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { MdCloudCircle } from "react-icons/md";
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: linear-gradient(-30deg, #0b3d3d 50%, #082b2b 50%);
  padding: 10px 20px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
          transform: translate(0%, 0%);
  overflow: hidden;
  color: #d4f7f7;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    padding: 20px 40px;
    position: relative;
    margin-left: 30%;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #85adad;
    opacity: 0;
    -webkit-transition: .2s opacity ease-in-out;
    transition: .2s opacity ease-in-out;
  }

  :hover::before {
    opacity: 0.2;
  }

  span {
    position: absolute;
  }

  span:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(linear, right top, left top, from(rgba(8, 43, 43, 0)), to(#26d9d9));
    background: linear-gradient(to left, rgba(8, 43, 43, 0), #26d9d9);
    -webkit-animation: 2s animateTop linear infinite;
            animation: 2s animateTop linear infinite;
  }

  @keyframes animateTop {
    0% {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
    }
  }

  span:nth-child(2) {
    top: 0px;
    right: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(linear, left bottom, left top, from(rgba(8, 43, 43, 0)), to(#26d9d9));
    background: linear-gradient(to top, rgba(8, 43, 43, 0), #26d9d9);
    -webkit-animation: 2s animateRight linear -1s infinite;
            animation: 2s animateRight linear -1s infinite;
  }

  @keyframes animateRight {
    0% {
      -webkit-transform: translateY(100%);
              transform: translateY(100%);
    }
    100% {
      -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
    }
  }

  span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(linear, left top, right top, from(rgba(8, 43, 43, 0)), to(#26d9d9));
    background: linear-gradient(to right, rgba(8, 43, 43, 0), #26d9d9);
    -webkit-animation: 2s animateBottom linear infinite;
            animation: 2s animateBottom linear infinite;
  }

  @keyframes animateBottom {
    0% {
      -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
    }
  }

  span:nth-child(4) {
    top: 0px;
    left: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 43, 43, 0)), to(#26d9d9));
    background: linear-gradient(to bottom, rgba(8, 43, 43, 0), #26d9d9);
    -webkit-animation: 2s animateLeft linear -1s infinite;
            animation: 2s animateLeft linear -1s infinite;
  }

  @keyframes animateLeft {
    0% {
      -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
    }
    100% {
      -webkit-transform: translateY(100%);
              transform: translateY(100%);
    }
  }
`;

export const CloudCircle = styled(MdCloudCircle)`
  transform: scale(1.6);
  padding-top: 3px;
`;

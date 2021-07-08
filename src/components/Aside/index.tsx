import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaCog, FaHome, FaBullhorn, FaChartLine, FaStar } from "react-icons/fa";
import { AsideContainer, MenuWrapper, Logo } from "./styles";
import LogoWhite from "../../asssets/svg/only-logo-white.svg";
import LogoAside from "../../asssets/svg/logo-white-aside.svg";
const Aside = () => {
  const { pathname } = useLocation();
  const navLinks = useRef<HTMLAnchorElement[]>([]);
  const [topIndicator, setTopIndicator] = useState("0");
  const [leftIndicator, setLeftIndicator] = useState("-4px");
  const indicator = useRef<HTMLSpanElement>(null);

  const getDimensions = () => {
    navLinks.current.forEach((item: HTMLElement) => {
      if (item?.className === "navlink--active") {
        const top = item.offsetTop;
        const left = item.offsetLeft;
        setLeftIndicator(`${left}px`);
        setTopIndicator(`${top}px`);
      }
    });
  };

  useEffect(() => {
    getDimensions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  window.onresize = () => {
    getDimensions();
  };

  return (
    <AsideContainer>
      <Logo src={LogoWhite} alt="Logo"></Logo>
      <div>
        <MenuWrapper topIndicator={topIndicator} leftIndicator={leftIndicator}>
          <NavLink
            to="/dashboardpartner/"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/dashboardpartner/services"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <img src={LogoAside} alt="serviços" />
            <span>Serviços</span>
          </NavLink>
          <NavLink
            to="/dashboardpartner/gains"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaChartLine />
            <span>Ganhos</span>
          </NavLink>
          <NavLink
            to="/dashboardpartner/reviews"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaStar />
            <span>Avaliações</span>
          </NavLink>
          <NavLink
            to="/dashboardpartner/complaints"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaBullhorn />
            <span>Reclamações</span>
          </NavLink>
          {/* <NavLink
            to="/dashboardpartner/settings"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaCog />
            <span>Configurações</span>
          </NavLink> */}
          <span className="indicator" ref={indicator}></span>
        </MenuWrapper>
      </div>
    </AsideContainer>
  );
};

export default Aside;

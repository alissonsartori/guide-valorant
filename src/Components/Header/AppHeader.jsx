import "./header-styles.css";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import AppMenu from "./AppMenu";
import React, { useState, useEffect } from "react";
import riotLogoUrl from "../../../public/RIOTLOGO.png"
import logoUrl from "../../../public/logo.png"

const AppHome = () => {
  const [isMobile, setIsMobile] = useState(() => {
    const storedIsMobile = localStorage.getItem("isMobile");

    return storedIsMobile ? JSON.parse(storedIsMobile) : false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("isMobile", JSON.stringify(isMobile));
  }, [isMobile]);

  return (
    <div className="header-container">
      <div className="logo">
        <img src={riotLogoUrl} className="riot-logo" alt="Logo" />
        <img src={logoUrl} className="logo" alt="Logo" />
      </div>
      <nav>
        {isMobile ? <AppMenu /> : null}
        {!isMobile ? (
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/agents">Agents</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/weapons">Weapons</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/sprays">Sprays</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/buddies">Buddies</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/maps">Maps</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/bundles">Bundles</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/cards">Cards</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ) : null}
      </nav>
    </div>
  );
};

export default AppHome;

import React from "react";
import "../styles/global.css";

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;

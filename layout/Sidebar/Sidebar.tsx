import React from "react";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../../components/Menu/Menu";

const Sidebar: React.FC<SidebarProps> = ({ ...props }): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export { Sidebar };

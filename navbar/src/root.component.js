import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem
} from "carbon-components-react";

export default function Root() {
  return (
    <Header aria-label="OpenMRS Navbar">
      <HeaderName prefix="OpenMRS">Platform</HeaderName>
      <HeaderNavigation>
        <HeaderMenuItem href="/">Home</HeaderMenuItem>
        <HeaderMenuItem href="/patients">Patients</HeaderMenuItem>
        <HeaderMenuItem href="/reports">Reports</HeaderMenuItem>
      </HeaderNavigation>
    </Header>
  );
}

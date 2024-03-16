"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="2xl:max-w-7xl py-10"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden">
        <NavbarBrand>
          <Link href={"/"}>
            <Image width={120} height={34} src="/logo.png" alt="logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarItem>
        <Link color="foreground" href="#">
          Latest
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Goodies
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button className="bg-transparent p-0 ">Posts</Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="react">
              <Link href={"/"}>React</Link>
            </DropdownItem>
            <DropdownItem key="css">
              <Link href={"/"}>CSS</Link>
            </DropdownItem>
            <DropdownItem key="nextjs">
              <Link href={"/"}>Nextjs</Link>
            </DropdownItem>
            <DropdownItem
              key="animation"
              className="text-danger"
              color="danger"
            >
              <Link href={"/"}>Animation</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>

      <NavbarItem>
        <Link href={"#"}>Courses</Link>
      </NavbarItem>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <Image width={30} height={30} src="/logo.png" alt="logo" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <Image width={30} height={30} src="/logo.png" alt="logo" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <Image width={30} height={30} src="/logo.png" alt="logo" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem key={"latest"}>
          <Link className="w-full" href={"/"}>
            Latest
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key={"latest"}>
          <Link className="w-full" href={"/"}>
            Goodies
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key={"latest"}>
          <Link className="w-full" href={"/"}>
            Posts
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key={"latest"}>
          <Link className="w-full" href={"/"}>
            Courses
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
export default Header;

// import React from "react";
// import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];

//   return (
//     <Navbar
//       isBordered
//       isMenuOpen={isMenuOpen}
//       onMenuOpenChange={setIsMenuOpen}
//     >
//       <NavbarContent className="sm:hidden" justify="start">
//         <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
//       </NavbarContent>

//       <NavbarContent className="sm:hidden pr-3" justify="center">
//         <NavbarBrand>
//           <AcmeLogo />
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarBrand>
//           <AcmeLogo />
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>

//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="warning" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//     </Navbar>
//   );
// }

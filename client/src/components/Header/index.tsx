"use client";

import Logo from "./logo";

import {
  NavbarBrand,
  Navbar,
  NavbarItem,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import GitLogo from "./GitLogo";

import Logo2 from "./logo2";

function Header() {
  return (
    <Navbar
      isBordered
      isBlurred={false}
      position="sticky"
      className="max-w-7xl mx-auto w-full flex "
    >
      {/* mobile Navbar */}

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle></NavbarMenuToggle>
      </NavbarContent>

      <NavbarContent className="flex sm:hidden " justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="sm:hidden  max-h-[24px] max-w-[24px] ring-2 ring-red-500"
        justify="end"
      >
        <GitLogo />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Latests
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            <Dropdown backdrop="blur">
              <DropdownTrigger>Posts</DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="react">React</DropdownItem>
                <DropdownItem key="animation">Animation</DropdownItem>
                <DropdownItem key="CSS">CSS</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  News
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Goodies
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="danger" href="#">
            Learn
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>

      {/* desktop Navbar */}
      <NavbarContent justify="start">
        <NavbarBrand className="hidden sm:flex">
          <Logo2 />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="#">
            Latests
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button className="bg-transparent">Posts</Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="react">React</DropdownItem>
                <DropdownItem key="animation">Animation</DropdownItem>
                <DropdownItem key="CSS">CSS</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  News
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Goodies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem className="FlexBetween flex-row-reverse gap-3">
          <Button
            variant="bordered"
            size="sm"
            className=" cursor-pointer  FlexCenter"
            color="danger"
            href="#"
          >
            <span className="mr-[2px]">
              <>{"</>"}</>
            </span>
            Learn
          </Button>
          <GitLogo />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;

"use client";
import { RiTwitterXFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { TbMessage2Bolt } from "react-icons/tb";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavbarBrand,
  Navbar,
  NavbarItem,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { TableDocument } from "iconsax-react";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`w-full max-w-4xl mb-[70px] mx-auto rounded-3xl overflow-clip h-auto sticky z-50 transition-all duration-700 ${
        visible ? "top-[50px] shadow-md" : "-top-full"
      } border-b-1 border-gray-600`}
    >
      <Navbar
        isBlurred={true}
        position="sticky"
        className="max-w-7xl mx-auto w-full flex"
      >
        {/* mobile Navbar */}
        <div className="flex justify-between w-full items-center sm:hidden">
          <NavbarContent className="flex sm:hidden" justify="center">
            <NavbarBrand>
              <Avatar src="/avatar.JPG" radius="full" />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            className="sm:hidden max-h-[24px] max-w-[24px]"
            justify="end"
          >
            <Link className="flex gap-3 items-center" href={"/register"}>
              <Button
                variant="bordered"
                isIconOnly
                size="sm"
                className="cursor-pointer group hover:transition-all hover:duration-700 ease-in hover:shadow-xl hover:shadow-redish-50 hover:bg-redish-50 w-fit FlexCenter"
                color="danger"
              >
                <RiTwitterXFill className="text-lg group-hover:text-white" />
              </Button>
              Twitter
            </Link>{" "}
            <Link
              className="flex items-center gap-3"
              href={"https://github.com/Ajmalleonard"}
            >
              <Button
                variant="bordered"
                isIconOnly
                size="sm"
                className="cursor-pointer group hover:transition-all hover:duration-700 ease-in hover:shadow-xl hover:shadow-redish-50 hover:bg-redish-50 w-fit FlexCenter"
                color="danger"
              >
                <SiGithub className="text-lg group-hover:text-white" />
              </Button>
              Github
            </Link>{" "}
            <Link
              className="flex gap-3 items-center"
              href={"https://github.com/Ajmalleonard"}
            >
              <Button
                variant="bordered"
                isIconOnly
                size="sm"
                className="cursor-pointer group hover:transition-all hover:duration-700 ease-in hover:shadow-xl hover:shadow-redish-50 hover:bg-redish-50 w-fit FlexCenter"
                color="danger"
              >
                <TbMessage2Bolt className="text-lg group-hover:text-white" />{" "}
              </Button>
              Blogs
            </Link>
          </NavbarContent>
        </div>

        {/* desktop Navbar */}
        <NavbarContent justify="start">
          <NavbarBrand className="hidden sm:flex">
            <Avatar src="/avatar.JPG" isBordered size="lg" radius="full" />
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
          <NavbarItem className="FlexBetween flex-row gap-3">
            <Link href={"/register"}>
              <Button
                variant="bordered"
                isIconOnly
                size="sm"
                className="cursor-pointer group hover:transition-all hover:duration-700 ease-in hover:shadow-xl hover:shadow-redish-50 hover:bg-redish-50 w-fit FlexCenter"
                color="danger"
              >
                <RiTwitterXFill className="text-lg group-hover:text-white" />
              </Button>
            </Link>{" "}
            <Link href={"https://github.com/Ajmalleonard"}>
              <Button
                variant="bordered"
                isIconOnly
                size="sm"
                className="cursor-pointer group hover:transition-all hover:duration-700 ease-in hover:shadow-xl hover:shadow-redish-50 hover:bg-redish-50 w-fit FlexCenter"
                color="danger"
              >
                <SiGithub className="text-lg group-hover:text-white" />
              </Button>
            </Link>{" "}
            <Link href={"/posts"}>
              <Button
                variant="bordered"
                isIconOnly
                size="sm"
                className="cursor-pointer group hover:transition-all hover:duration-700 ease-in hover:shadow-xl hover:shadow-redish-50 hover:bg-redish-50 w-fit FlexCenter"
                color="danger"
              >
                <TbMessage2Bolt className="text-lg group-hover:text-white" />
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}

export default Header;

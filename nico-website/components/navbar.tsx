import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
    } from "@nextui-org/navbar";
    import { Link } from "@nextui-org/link";
    import NextLink from "next/link";
    import { siteConfig } from "@/config/site";
    import Image from "next/image";
    import logo from "../src/logo.png";
    import { title } from "@/font/font";
    import { para } from "@/font/font";

    export const Navbar = () => {

    return (
        <NextUINavbar maxWidth="xl" shouldHideOnScroll className={title.className}>
            
            <NavbarContent className="sm:basis-full" justify="start">
                <NavbarBrand className="gap-8 max-w-fit">
                    <NextLink className="flex items-center gap-8" href="/">
                        <Image src={logo} alt="" className="w-32"/>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-10 ml-2">
                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <NextLink href= {item.href}>
                            {item.label}
                        </NextLink>
                    </NavbarItem>
                ))}
                </ul>
            </NavbarContent>

            <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu className={title.className}>
                <div className="mx-4 mt-2 flex flex-col gap-10">
                {siteConfig.navMenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <NextLink href= {item.href}>
                            {item.label}
                        </NextLink>
                    </NavbarMenuItem>
                ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};

"use client";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarMenuItem,
    } from "@nextui-org/navbar";
import NextLink from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { title } from "@/font/font";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const patchname = usePathname();

    type LinkItem = {
        href: string;
        label: string;
    };

    let Links: LinkItem[] = [];
    
    if (patchname === "/accueilMontage" || patchname === "/gallerieMontage" || patchname === "/about" || patchname === "/contact") {
        Links = [
            {
                href: "/accueilMontage", label: "Accueil Montage"},
            {
                href: "/gallerieMontage", label: "Gallerie Montage"},
            {
                href: "/about", label: "A Propos"},
            {
                href: "/contact", label: "Contact"},
        ];
    } else if (patchname === "/accueilCopy" || patchname === "/gallerieCopy" || patchname === "/about" || patchname === "/contact") {
        Links = [
            {
                label: "Accueil Copywriting",
                href: "/accueilCopy",
            },
            {
                label: "Gallerie Copywriting",
                href: "/gallerieCopy",
            },
            {
                href: "/about", label: "A Propos"},
            {
                href: "/contact", label: "Contact"},
        ];
    }

    return (
        <NextUINavbar maxWidth="xl" shouldHideOnScroll className={title.className}>
            
            <NavbarContent className="sm:basis-full" justify="start">
                <NavbarBrand className="gap-8 max-w-fit">
                    <NextLink className="flex items-center gap-8" href="/">
                        <Image src={logo} alt="" className="w-32"/>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-10 ml-2">
                    {Links.map((link) => (
                        <li key={link.href}>
                            <NextLink href= {link.href} passHref>
                                {link.label}
                            </NextLink>
                        </li>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu className={title.className}>
                <div className="mx-4 mt-2 flex flex-col gap-10">
                    {Links.map((link, index) => (
                        <NavbarMenuItem key={`${link}-${index}`}>
                            <NextLink href= {link.href} passHref>
                                {link.label}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};

export default Navbar;

"use client";
import "@/styles/globals.css";
import { Providers } from "./providers";
import  Navbar  from "@/components/navbar";
import { usePathname } from "next/navigation";


const RootLayout: React.FC = ({children}) =>{
    const pathname = usePathname();
    const isLandingPage = pathname === "/";

    return (
        <html suppressHydrationWarning lang="fr">
            <head />
            <body className="antialiased">
                <Providers themeProps={{ attribute: "class"}}>
                    {!isLandingPage && <Navbar /> }
                    <main>
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}

export default RootLayout;


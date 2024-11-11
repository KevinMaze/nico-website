import "@/styles/globals.css";
import { Metadata } from "next";
import { Link } from "@nextui-org/link";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "./src/logo.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html suppressHydrationWarning lang="fr">
            <head />
            <body className="antialiased">
                <Providers themeProps={{ attribute: "class"}}>
                    {/* <Navbar /> */}
                        <main>
                        {children}
                        </main>
                </Providers>
            </body>
        </html>
    );
}


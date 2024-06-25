import { DarkProvider } from "@/components/dark-provider";
import { THEME, ThemeProvider } from "@/components/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian",
  description: "Hello world!",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <DarkProvider>
        <ThemeProvider value={THEME}>
          <head> 
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
              integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          </head>
          <body className={inter.className + " bg-palette-offwhite dark:bg-palette-grey text-palette-black dark:text-palette-white"}>
            {children}
          </body>
        </ThemeProvider>
      </DarkProvider>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter , Lusitana } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/src/context/menuContext";
import Header from "@/src/components/header/page";
import MenuMobile from "@/src/components/menuMobile/page";

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });
const lusitana = Lusitana({ weight: ['400' , '700'] , subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tier list maker",
  description: "Create your own tier list with this simple tool",
};

export default function RootLayout({children} : RootLayoutProps) {

  return (
    <html lang="fr">
        <body className={`${inter.className} antialiased`}>
          <MenuProvider>
              <Header />
              <MenuMobile />
              {children}
          </MenuProvider>
        </body>
    </html>
  );
}

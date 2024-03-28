import "./globals.css";
import type { Metadata } from "next";
import { Inter , Bangers, Luckiest_Guy, Oswald, Raleway } from "next/font/google";
import { MenuProvider } from "@/src/context/menuContext";
import Header from "@/src/components/header/page";
import Footer from "@/src/components/footer/page";
import MenuMobile from "@/src/components/menuMobile/page";

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });
const bangers = Bangers({ weight: ['400'] , subsets: ["latin"], variable:'--font-bangers' });
const luckiestGuy = Luckiest_Guy({ weight: ['400'], subsets:["latin"], variable:'--font-luckiest-guy' });
const oswald = Oswald({ weight: ['200', '400', '600'] , subsets: ["latin"], variable:'--font-oswald' });
const raleway = Raleway({ weight: ['200', '400', '600'] , subsets: ["latin"], variable:'--font-raleway' });

export const metadata: Metadata = {
  title: "Top Tierlist",
  description: "Create your own tier list with this simple tool",
};

export default function RootLayout({children} : RootLayoutProps) {

  return (
    <html lang="fr">
        <body className={`bg-black ${raleway.className} ${bangers.variable} ${luckiestGuy.variable} ${oswald.variable} antialiased`}>
          <MenuProvider>
              <Header />
              <MenuMobile />
              <main className=" flex flex-col grow max-w-6xl mx-auto">
                {children}
              </main>
              <Footer />
          </MenuProvider>
        </body>
    </html>
  );
}

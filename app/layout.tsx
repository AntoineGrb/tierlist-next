import type { Metadata } from "next";
import { Inter , Lusitana } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header/page";

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
        <Header />
        {children}
      </body>
    </html>
  );
}

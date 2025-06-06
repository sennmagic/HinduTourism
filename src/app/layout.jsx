import "./globals.css";

import { Inter } from "next/font/google";
import GoToTop from "@/components/atoms/GotoTop";
import GoogleTranslateWidget from "@/components/translator/GoogleTranslateWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "HINDU TOURISM",
  description: "HinduTourism-Best Hindu site for Tourists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-inter">
   
    {children}
 
      </body>
    </html>
  );
}

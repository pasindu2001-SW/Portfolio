import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Pasindu Balasuriya",
  description: "Portfolio of Pasindu Balasuriya, showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
       
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden
       `}
      >
        {children}
      </body>
    </html>
  );
}

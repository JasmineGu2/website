import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include weights used in your CSS
});

export const metadata = {
  title: "Jasmine Gu's Website",
  description: "Personal Portfolio of Jasmine Gu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${interFont.variable} antialiased h-full w-full`}>
        {children}
      </body>
    </html>
  );
}

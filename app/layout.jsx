import { Teko } from "next/font/google"; // Import Teko from Google Fonts
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const teko = Teko({
  variable: "--font-teko", // Define a CSS variable for the font
  subsets: ["latin"], // Load Latin characters
  weight: ["300", "400", "500", "600", "700"], // Available font weights
});

export const metadata = {
  title: "WebWise",
  description: "improve your website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${teko.variable} antialiased bg-slate-50`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "INNOVA DEKO - Persianas, Toldos & Cortinas",
  description: "Transformamos tu hogar con cortinas de lujo, persianas eléctricas y soluciones de decoración premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: "'Cobe', 'DM Sans', 'Space Grotesk', 'Poppins', 'Inter', 'Arial', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}

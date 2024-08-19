import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Ferandalex",
  description: "Viziunea ta devine realitate cu Ferandalex!",
};
export const viewport = {
  themeColor: '#F26A45',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#000000] max-w-[1920px] mx-auto">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

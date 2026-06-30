import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Satish Yadav | Process Engineer & Developer",
  description: "Personal portfolio and blog by Satish Yadav",
  openGraph: {
    title: "Satish Yadav | Process Engineer & Developer",
    description: "Personal portfolio and blog by Satish Yadav",
    url: "https://satish.dev", // Change this
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

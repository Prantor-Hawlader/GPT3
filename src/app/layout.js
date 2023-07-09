import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Nabar";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prantorly",
  description: "Solution to all problem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}

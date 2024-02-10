import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokemon Fight Helper",
  description: "Personal pokemon fight helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-screen wrapper flex justify-center items-center">
          {children}
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}

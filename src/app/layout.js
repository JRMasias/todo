import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata = {
  title: "To-Do List",
  description: "Simple To-Do list designed & developed by J. R. Masias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

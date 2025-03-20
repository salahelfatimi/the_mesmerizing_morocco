import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: {  template: "The Mesmerizing Morocco  | %s" } ,
  description: "Discover the magic of Marrakech with The Mesmerizing Morocco! 🌟 From guided tours to desert adventures, we create unique travel experiences across Morocco. Book your dream trip today!",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-secondary`}>
        {children}
      </body>
    </html>
  );
}

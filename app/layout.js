import { Footer, Header, ScrollTopButton } from "@/components";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="mx-auto">
        {/* <div className="containter">
          
        </div> */}
        <Header />
        {children}
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  );
}

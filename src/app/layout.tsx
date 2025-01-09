import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "../../components";

/*import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false*/


export const metadata: Metadata = {
  title: "EasyWayGPS",
  description: "Tu servicio de GPS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

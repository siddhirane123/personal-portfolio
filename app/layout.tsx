import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from './LenisProvider';

export const metadata: Metadata = {
  title: 'Siddhi Rane | Portfolio',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

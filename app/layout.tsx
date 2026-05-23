import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

// Loading the Serif font for headings
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

// Loading the Sans font for body text
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Karthik Neelarapu — UI/UX Designer & Frontend Developer",
  description: "Portfolio of Karthik Neelarapu, a UI/UX Designer and Frontend Developer based in Hyderabad, specializing in high-performance digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="bg-[#0a0a08] text-[#f0ede6] antialiased">
        {children}
      </body>
    </html>
  );
}
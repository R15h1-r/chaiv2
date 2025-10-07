import "./globals.css";
import type { Metadata } from "next";
// 1. Import the correct fonts: Poppins and Inter
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// 2. Set up Inter for the body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Matches 'font-body' in your config
});

// 3. Set up Poppins for headings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Load multiple weights if needed
  variable: "--font-poppins", // Matches 'font-heading' in your config
});

export const metadata: Metadata = {
  title: "My Awesome App",
  description: "Built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 4. Apply both font variables to the body */}
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

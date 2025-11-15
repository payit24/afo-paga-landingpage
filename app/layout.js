import { Lora } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

const etna = localFont({
  src: [
    {
      path: '../public/fonts/Etna-Regular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-etna',
})

const grok = localFont({
  src: [
    {
      path: '../public/fonts/host.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-grok',
})

export const metadata = {
  title: "Afropaga - Simplifying Bill Payments Across Africa",
  description: "Afropagate is your all-in-one platform for seamless bill payments across Africa. Pay, manage, and track your bills with ease and security.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${grok.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

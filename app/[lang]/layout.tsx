import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "../globals.css";


const fontPoppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

const fontLora = Lora({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    variable: '--font-lora',
});

export const metadata: Metadata = {
    title: 'Title',
    description: 'Description',
    icons: {
        icon: [
            {
                url: '/images/favicon.svg',
                href: '/images/favicon.svg',
            },
        ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPoppins.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

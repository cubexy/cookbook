import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Separator, Theme } from "@radix-ui/themes";
import { Header } from "@/components/Header";
import { Bodoni_Moda, Gasoek_One, Jersey_10 } from "next/font/google";

export const metadata: Metadata = {
  title: "ai_cookbook",
  description: "ai assisted recipes"
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="m-0">
        <Theme
          accentColor="iris"
          grayColor="auto"
          radius="full"
          appearance="dark"
        >
          <Header />
          <Separator my="0" size="4" />
          <div>{children}</div>
        </Theme>
      </body>
    </html>
  );
}

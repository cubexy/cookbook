import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Flex, Separator, Theme } from "@radix-ui/themes";
import { Header } from "@/components/Header";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "superkochbuch",
  description: "Dein persönliches Kochbuch"
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <ThemeProvider attribute="class">
          <Theme
            accentColor="iris"
            grayColor="auto"
            radius="full"
            appearance="inherit"
            panelBackground="translucent"
          >
            <Header />
            <Separator my="0" size="4" />
            <Flex align="start" justify="center" className="p-6">
              {children}
            </Flex>
            <Footer />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

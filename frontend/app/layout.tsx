import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Separator, Theme } from "@radix-ui/themes";
import { Header } from "@/components/Header";
import { ThemeProvider } from "next-themes";

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
    <html lang="de" suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="m-0">
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
            <div>{children}</div>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

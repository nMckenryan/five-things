import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";

import { CSPostHogProvider } from "./_analytics/provider";
import ToastHandler from "./components/ui/toast-handler";
import { HeaderMenu } from "./components/ui/header-menu";

export const metadata = {
  title: "Five Things!",
  description: "Say good things about things",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en">
          <body className={GeistSans.className}>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <ToastHandler>
                  <HeaderMenu />
                  <main
                    className="page-background"
                    style={{
                      background:
                        "linear-gradient(to bottom, #256670, #1E425E)",
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      padding: "2rem",
                    }}
                  >
                    {children}
                    {modal}
                    <div id="modal-root" />
                  </main>
                </ToastHandler>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}

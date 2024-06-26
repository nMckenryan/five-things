import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import "~/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import LoginIcon from '@mui/icons-material/Login';

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Five Things!",
  description: "Say good things about things",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={GeistSans.className}>
        
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          <header style={{display: "flex", justifyContent: "flex-end", backgroundColor: "green", position: "sticky", top: "0"}}>
            <SignedOut>
              <SignInButton>
                {/* annoying workaround to make the icon clickable when wrapped in clerk button */}
                <LoginIcon style={{cursor: "hand"}}/>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
            {children}
          </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

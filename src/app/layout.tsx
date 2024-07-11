import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import "~/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import LoginIcon from '@mui/icons-material/Login';
import { Typography } from '@mui/material';

import { GeistSans } from "geist/font/sans";
import InsertCard from './components/insert-card';
import { createPost } from './actions/actions';

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
            {/* TOP NAV */}
          <header style={{display: "flex", justifyContent: "space-between", backgroundColor: "#407056", position: "sticky", top: "0", padding: "8px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
            <Typography fontFamily="Bebas Neue" fontSize="2rem" color={"white"}>Five Things!</Typography>
            <div className="leftNav" style={{display: "flex", alignItems: "center", gap: "1rem", padding: "4px"}}>
              <SignedOut>
                <SignInButton>
                  {/* annoying workaround to make the icon clickable when wrapped in clerk button */}
                  <LoginIcon style={{cursor: "hand"}}/>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <InsertCard createPost={createPost}/>
                <UserButton />
              </SignedIn>
            </div>
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

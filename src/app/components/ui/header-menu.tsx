import {
  SignedOut,
  SignInButton,
  SignedIn,
  ClerkLoading,
  ClerkLoaded,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import InsertCard from "../insert-card";
import { Skeleton, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AboutPage from "~/app/about/page";

export const HeaderMenu = () => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      backgroundImage: "linear-gradient(to bottom, #6EDE0D, #17DE0D)",
      backgroundColor: "#0DDE4C",
      position: "sticky",
      top: "0",
      padding: "8px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      zIndex: 1000,
    }}
  >
    <Link href="/">
      <Typography
        className="logo"
        fontFamily="Bebas Neue"
        fontSize="2rem"
        color={"white"}
      >
        Five Things!
      </Typography>
    </Link>
    <div
      className="leftNav"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "4px",
        justifyContent: "center",
      }}
    >
      <AboutPage />
      <SignedOut>
        <SignInButton>
          <LoginIcon sx={{ cursor: "hand", color: "white" }} />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <InsertCard />
        <ClerkLoading>
          <Skeleton variant="circular" width={28} height={28} />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </SignedIn>
    </div>
  </header>
);

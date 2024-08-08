import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

import "./globals.css";
import { RoutePaths } from "@/models";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quicky",
  description: "Manage your meetings",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        signInFallbackRedirectUrl={RoutePaths.HOME}
        signUpFallbackRedirectUrl={RoutePaths.HOME}
        afterSignOutUrl='/sign-in'
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoLinkUrl: RoutePaths.HOME,
            socialButtonsPlacement: "bottom",
            showOptionalFields: false,
          },
          variables: {
            colorText: "#FFF",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#FFF",
            colorNeutral: "#fff",
          },
          userProfile: {
            variables: {
              colorText: "#FFF",
              colorPrimary: "#0E78F9",
              colorBackground: "#1C1F2E",
              colorInputBackground: "#252A41",
              colorInputText: "#FFF",
            },
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "@stream-io/video-react-sdk/dist/css/styles.css";

import "./globals.css";
import { RoutePaths } from "@/models";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quicky",
  description: "Manage your meetings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        afterSignInUrl={RoutePaths.HOME}
        afterSignUpUrl={RoutePaths.HOME}
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

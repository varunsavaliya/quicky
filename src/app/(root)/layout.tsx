import { ReactNode } from "react";
import { Metadata } from "next";

import { Toaster } from "@/components/ui/toaster";
import StreamVideoProvider from "@/providers/StreamClientProvider";

export const metadata: Metadata = {
  title: "Quicky",
  description: "Manage your meetings",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
      <Toaster />
    </main>
  );
};

export default RootLayout;

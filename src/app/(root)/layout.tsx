import { ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";
import StreamVideoProvider from "@/providers/StreamClientProvider";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
      <Toaster />
    </main>
  );
};

export default RootLayout;

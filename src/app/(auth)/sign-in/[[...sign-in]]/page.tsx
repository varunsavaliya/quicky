'use client'

import { SignIn } from "@clerk/nextjs";

const SignedInPage = () => {
  return (
    <main className="flex h-screen w-full justify-center items-center">
      <SignIn />
    </main>
  );
};

export default SignedInPage;

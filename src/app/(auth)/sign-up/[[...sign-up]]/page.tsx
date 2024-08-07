'use client'

import { SignUp } from "@clerk/clerk-react";

const SignedUpPage = () => {
  return (
    <main className="flex h-screen w-full justify-center items-center">
      <SignUp />
    </main>
  );
};

export default SignedUpPage;

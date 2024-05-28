import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function LoginPage() {
  return (
    <>
    <div className="bg-amber-300 w-14 text-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </div>
      
    </>
  );
}

export default LoginPage;

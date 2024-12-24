import { ClerkLoaded, SignedOut, UserButton } from "@clerk/nextjs";
export default function Home() {
    return ( 
        <div>
            <ClerkLoaded>
          <SignedOut>
            <UserButton/>
            </SignedOut>
            </ClerkLoaded>

        </div>
    );
}
import { SignIn, ClerkLoading, ClerkLoaded } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
export default function Page() {
  return (
  <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
  <div className='h-full lg:flex flex-col items-center justify-center px-4'>
   <div className='text-center space-y-4 pt-16'>
    <h1 className='font-bold text-3xl text-[#2E2A47]'>
      Wellcome Back
    </h1>
    <p className='text-base text-[#7E8CA0]'>
        Login or Create an account to go back to your dashboard
            </p>
  </div>
  <div className='flex items-center justify-center mt-8'>
    <ClerkLoaded>
  <SignIn path='/sign-in'/>
  </ClerkLoaded>
  <ClerkLoading>
    <Loader2 className='animate-spin text-muted-foreground' />
  </ClerkLoading>
  </div>
  </div>
  <div className='hidden lg:flex h-full items-center justify-center bg-[#1d45be]'>
  <Image src='/logoipsum-332.svg' height={100} width={100} alt='Logo' />

  </div>
  </div>
  );

}
'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function CamperVanPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Hang on there...</p>;
  }
  if (status === 'authenticated') {
    const { email: userEmail, image } = session?.user;

    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
        <img src={image} />
      </>
    );
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn('github')}>Sign in</button>
    </>
  );
}

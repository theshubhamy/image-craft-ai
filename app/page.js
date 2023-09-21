import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <h1>Welcome to Image Craft Ai</h1>
      <Link href="/auth">signin to explore</Link>
    </div>
  );
};

export default Home;

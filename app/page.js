import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Image Craft Ai</h1>
      <Link href="/auth">signin to explore</Link>
    </div>
  );
};

export default Home;

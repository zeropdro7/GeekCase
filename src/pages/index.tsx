import React from 'react';
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Home;

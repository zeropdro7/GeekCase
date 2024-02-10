import Link from 'next/link'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  )
}

export default Home

import React from 'react'
import Link from 'next/link';

function Article() {
  return (
    <div>
      <h1>Articles Page</h1>
      <Link href='/posts' className='bg-gray-500'>Take me to the posts page</Link>
    </div>
  )
}

export default Article
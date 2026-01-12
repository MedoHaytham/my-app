import React from 'react'
import Link from 'next/link'

async function Post({id}) {
  await new Promise((resolved) => {
    setTimeout(() => {
      resolved();
    }, 2000);
  });
  const response = await fetch(`https://dummyjson.com/posts/${id}`,
    {
      next: {
        revalidate: 120,
      }
    }
  );
  const post = await response.json();

  return (
    <div className='bg-white text-black mt-5 p-2.5 rounded-[10px]'>
      <h1 className='leading-none font-bold'>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
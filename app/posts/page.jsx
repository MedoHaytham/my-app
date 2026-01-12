import React from 'react'
import Post from '../components/post';
import Link from 'next/link';

async function PostsPage() {

  const response = await fetch(
    'https://dummyjson.com/posts?limit=100',
    {
      next: {
        revalidate: 120,
      }
    }
  );
  const posts = await response.json();

  return (
    <div>
      <h1>Post Page</h1>
      <div className='flex flex-col justify-center items-center'>
        {
          posts.posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className='w-[70%]'>
              <div className='bg-white text-black mt-5 p-2.5 rounded-[10px]'>
                <h1 className='leading-none font-bold'>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default PostsPage
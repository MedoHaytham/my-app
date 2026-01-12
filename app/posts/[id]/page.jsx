import React, { Suspense } from 'react'
import Post from '../../components/post'

async function PostPage({params}) {
  const {id} = await params;


  const loading = (
    <div className='bg-white text-black mt-5 p-2.5 rounded-[10px]'>
      <h1 className='leading-none font-bold'>Loading...</h1>
    </div>
  );

  
  return (
    <section className='p-2.5'>
      <h1>Post Details</h1>
      <div className='w-full flex justify-center items-center'>
        <div className='w-[70%]'>
          <Suspense fallback={loading}>
            <Post id={id} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default PostPage
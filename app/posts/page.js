import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react'



export default async function Posts() {

const posts =  await getAllPosts();
console.log(posts)

  return (
    <div>
        <div>All posts</div>
     <ul>
        {posts.map((post) =>
        <div key={post.id}>


            <li  className='text-green-300 font-bold text-2xl'><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
           <li> {post?.body}</li>
         
        </div>
          
        )}
     </ul>
    </div>
  )
}
